import * as React from 'react';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

export const LayoutComponent: React.FC<React.PropsWithChildren> = (props) => {
    return <>
        <HeaderComponent/>
        <main id="br-main">
            { props.children }
        </main>
        <FooterComponent/>
    </>;
};
