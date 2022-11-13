import { slugify } from '../../src/utils/slug';

export const rssFeedQuery = `{
    allNotion {
        nodes {
            id
            title
            createdAt
        }
    }
}`;

type SiteMetadataQuery = {
    siteMetadata: {
        title: string,
        description: string,
        siteUrl: string,
        version: string
    }
}

type FeedQuery = {
    nodes: [{
        id: string,
        title: string,
        createdAt: string
    }]
}

type SerializeArgs = {
    query: {
        site: SiteMetadataQuery,
        allNotion: FeedQuery
    }
}

function serialize(params: SerializeArgs) {
    return params.query.allNotion.nodes.map(node => {
        return {
            title: node.title,
            date: node.createdAt,
            url: `${params.query.site.siteMetadata.siteUrl}/${slugify(node.title)}`,
            guid: node.id
        };
    });
}

export const rssFeedPluginConfig = {
    feeds: [{
        query: rssFeedQuery,
        output: 'rss.xml',
        title: 'The Bad Request Blog Feed',
        serialize
    }]
};
