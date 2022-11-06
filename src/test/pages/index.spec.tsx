import React from 'react';
import { render } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import IndexPage from '../../pages/index';

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

    it('should have the correct heading', async () => {
        const component = render(<IndexPage></IndexPage>);
        const headingElement = await component.findByTestId('br-footer');
        expect(headingElement).toHaveTextContent('1.0.0');
    });
});
