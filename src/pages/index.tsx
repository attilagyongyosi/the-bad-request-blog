import * as React from 'react';
import * as styles from './index.module.scss';

const IndexPage: React.FC = () => {
    return (
        <section id={styles.page}>
            <h1 className={'red'}>Cheers! 👋🏼</h1>
            <p>This blog is under construction! There are commits flying and such.</p>
            <p>It would be cool if you could check back later though.</p>
            <p>Until that, have a cheeky look at my <a href="https://github.com/attilagyongyosi" className={'red'}>GitHub</a>!</p>
        </section>
    );
};

export default IndexPage;
