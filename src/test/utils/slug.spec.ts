import { describe } from 'vitest';
import { slugify } from '../../utils/slug';

describe('slugify()', () => {
    it('should replace spaces with -', () => {
        expect(slugify('some text with spaces')).toBe('some-text-with-spaces');
    });

    it('should trim input string', () => {
        expect(slugify('  text with leading and trailing spaces  ')).toBe('text-with-leading-and-trailing-spaces');
    });

    it('should make input string lowercase', () => {
        expect(slugify('Text with Uppercase LetterS')).toBe('text-with-uppercase-letters');
    });
});
