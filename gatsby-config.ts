import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';
import { version } from './package.json';

const envFileName = `.env.${process.env.NODE_ENV}`;
console.info(`Reading environment variables from ${envFileName}...`);

dotenv.config({ path: envFileName });

const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionToken = process.env.NOTION_TOKEN;

console.info(`Notion database ID successfully read from environment: ${!!notionDatabaseId}.`);
console.info(`Notion integration token successfully read from environment: ${!!notionToken}.`);

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'The Bad Request Blog',
        version
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-notion-api',
            options: {
                token: notionToken,
                databaseId: notionDatabaseId,
                propsToFrontmatter: false,
                lowerTitleLevel: true
            }
        }
    ],
};

export default config;
