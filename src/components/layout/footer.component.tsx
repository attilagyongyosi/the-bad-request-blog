import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './footer.module.scss';

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
    return <footer id={styles.footer} data-testid="br-footer">
        made with <span id={styles.love} className={'red'}>love</span> by attilagyongyosi | v{version.site.siteMetadata.version} |
        <a href="/rss.xml" target="_blank" className={'material-symbols-outlined'}>rss_feed</a>
    </footer>;
};
