import * as React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { LayoutComponent } from './src/components/layout/layout.component';

import 'the-new-css-reset/css/reset.css';
import './src/styles/global.scss';

export function wrapPageElement(params: WrapPageElementBrowserArgs) {
    return <LayoutComponent {...params.props}>{params.element}</LayoutComponent>;
}
