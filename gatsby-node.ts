import { resolve } from 'path';
import { slugify } from './src/utils/slug';
import { CreatePagesArgs } from 'gatsby';

type NotionPagesQuery = {
    allNotion: {
        nodes: [{
            id: string,
            title: string,
            markdownString: string
        }]
    }
}

const notionQuery = `query {
  allNotion {
    nodes {
        id
        title
        markdownString
    }
  }
}`;

// Create blog pages dynamically
export async function createPages(params: CreatePagesArgs): Promise<void> {
    const { createPage } = params.actions;

    const blogPostTemplate = resolve('src/components/blog/blog-post.component.tsx');
    const result = await params.graphql<NotionPagesQuery>(notionQuery);

    result.data?.allNotion.nodes.forEach(node => {
        const postUrl = slugify(node.title);
        params.reporter.info(`Creating Notion blog post page with URL ${postUrl}...`);
        createPage({
            path: postUrl,
            component: blogPostTemplate,
            context: {
                title: node.title,
                content: node.markdownString
            },
        });
        params.reporter.info(`Notion blog post page with URL ${postUrl} created.`);
    });
}
