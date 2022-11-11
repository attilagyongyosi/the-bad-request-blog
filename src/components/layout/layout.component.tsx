import * as React from 'react';
import { FooterComponent } from './footer.component';

export const LayoutComponent: React.FC<React.PropsWithChildren> = (props) => {
    return <>
        <header data-testid="br-header">The Bad Request Blog</header>
        <main id="br-main">
            { props.children }
        </main>
        <FooterComponent/>
    </>;
};
