import React from 'react';
import { render } from '@testing-library/react';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import { FooterComponent } from '../../../components/layout/footer.component';

describe('Index Page Component', () => {
    beforeEach(() => {
        vi.mock('gatsby', () => ({
            graphql: vi.fn(),
            useStaticQuery: () => ({
                site: {
                    siteMetadata: {
                        version: '1.0.0'
                    },
                }
            })
        }));
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it('should this the site version number', async () => {
        const component = render(<FooterComponent></FooterComponent>);
        const headingElement = await component.findByTestId('br-footer');
        expect(headingElement).toHaveTextContent('1.0.0');
    });
});
