import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';
import { version } from './package.json';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

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
                token: process.env.NOTION_TOKEN,
                databaseId: process.env.NOTION_DATABASE_ID,
                propsToFrontmatter: false,
                lowerTitleLevel: true
            }
        }
    ],
};

export default config;
