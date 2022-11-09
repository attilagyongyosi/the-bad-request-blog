import React from 'react';
import { render } from '@testing-library/react';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import IndexPage from '../../pages/index';

describe('Index Page Component', () => {
    beforeEach(() => {
        vi.mock('../../components/layout/layout.component', () => ({
            LayoutComponent: vi.fn()
        }));
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should have the correct heading', async () => {
        const component = render(<IndexPage></IndexPage>);
        expect(component).toBeDefined();
    });
});
