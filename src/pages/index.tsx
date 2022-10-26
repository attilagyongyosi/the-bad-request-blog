import * as React from 'react';
import { useStaticQuery } from 'gatsby';
import { versionQuery } from '../queries/version.query';

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
