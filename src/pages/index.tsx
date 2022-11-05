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

function IndexPage() {
    const version = useStaticQuery(versionQuery);

    return (
        <main>
            <h1>This is a beginning of a beautiful friendship</h1>
            <footer>{version.site.siteMetadata.version}</footer>
        </main>
    );
}

export default IndexPage;
