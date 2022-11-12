import * as React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { LayoutComponent } from './src/components/layout/layout.component';

export function wrapPageElement(params: WrapPageElementBrowserArgs) {
    return <LayoutComponent {...params.props}>{params.element}</LayoutComponent>;
}
