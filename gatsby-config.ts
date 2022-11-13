import type { GatsbyConfig } from 'gatsby';
import { version } from './package.json';
import { rssFeedPluginConfig } from './config/gatsby/rss-feed-config';
import { getNotionPluginConfig } from './config/gatsby/notion-config';

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
            options: rssFeedPluginConfig
        }
    ],
};

export default config;
