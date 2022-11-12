import { resolve } from 'path';

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
export async function createPages(params): Promise<void> {
    const { createPage } = params.actions;

    const blogPostTemplate = resolve('src/components/blog/blog-post.component.tsx');
    const result = await params.graphql(notionQuery);

    result.data.allNotion.nodes.forEach(node => {
        params.reporter.info(node.id);
        createPage({
            path: `${node.id}`,
            component: blogPostTemplate,
            context: {
                title: node.title,
                content: node.markdownString
            },
        });
    });
}
