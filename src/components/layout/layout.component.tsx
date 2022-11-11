import * as React from 'react';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import * as styles from './layout.module.scss';

export const LayoutComponent: React.FC<React.PropsWithChildren> = (props) => {
    return <>
        <HeaderComponent/>
        <main id={styles.main}>
            { props.children }
        </main>
        <FooterComponent/>
    </>;
};
