import { graphql } from 'gatsby';

export const versionQuery = graphql`
    query {
        site {
            siteMetadata {
                version
            }
        }
    }`;
