import * as React from 'react';
import * as styles from './404.module.scss';

const NotFoundPage: React.FC = () => {
    return <p id={styles.notFoundMessage}>
        😢<br/>
        Sorry mate, nothing is here at the moment.<br/>
        This page is not found.
    </p>;
};

export default NotFoundPage;
