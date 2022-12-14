import * as React from 'react';
import * as styles from './header.module.scss';

export const HeaderComponent: React.FC = () => {
    return <header id={styles.header} data-testid="br-header">
        <a href={'/'}>
            <p id={styles.headline}>
                <span id={styles.bad} className={'red'}>Bad</span> Request
            </p>
            <span id={styles.sub}>opinionated tech blog from attilagyongyosi</span>
        </a>
    </header>;
};
