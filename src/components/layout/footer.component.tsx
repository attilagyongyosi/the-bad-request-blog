import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const versionQuery = graphql`
    query {
        site {
            siteMetadata {
                version
            }
        }
    }`;

export const FooterComponent: React.FC = () => {
    const version = useStaticQuery(versionQuery);
    return <footer data-testid="br-footer">{version.site.siteMetadata.version}</footer>;
};
