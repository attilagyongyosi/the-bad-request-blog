import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';
import { version } from './package.json';
import { slugify } from './src/utils/slug';

function getNotionPluginConfig() {
    const envFileName = `.env.${process.env.NODE_ENV}`;
    console.info(`Reading environment variables from ${envFileName}...`);

    dotenv.config({ path: envFileName });

    const notionDatabaseId = process.env.NOTION_DATABASE_ID;
    const notionToken = process.env.NOTION_TOKEN;

    console.info(`Notion database ID successfully read from environment: ${!!notionDatabaseId}.`);
    console.info(`Notion integration token successfully read from environment: ${!!notionToken}.`);

    return {
        token: notionToken,
        databaseId: notionDatabaseId,
        propsToFrontmatter: false,
        lowerTitleLevel: true
    };
}

const notionPostsQuery = `
{
    allNotion {
        nodes {
            id
            title
            createdAt
        }
    }
}
`;

function serialize({ query: { site, allNotion } }) {
    return allNotion.nodes.map(node => {
        return {
            title: node.title,
            date: node.createdAt,
            url: `${site.siteMetadata.siteUrl}/${slugify(node.title)}`,
            guid: node.id
        };
    });
}

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'The Bad Request Blog',
        description: 'Opinionated tech blog from attilagyongyosi',
        siteUrl: 'https://blog.attilagyongyosi.dev',
        version
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-notion-api',
            options: getNotionPluginConfig()
        },
        {
            resolve: 'gatsby-plugin-feed',
            options: {
                feeds: [{
                    query: notionPostsQuery,
                    output: 'rss.xml',
                    title: 'The Bad Request Blog Feed',
                    serialize
                }]
            }
        }
    ],
};

export default config;
