import type { GatsbyConfig } from 'gatsby';
import { version } from './package.json';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'The Bad Request Blog',
        version
    },
    plugins: [],
};

export default config;
