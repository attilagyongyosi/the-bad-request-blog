export function slugify(string: string): string {
    return string.trim().toLowerCase().replace(/ /g, '-');
}
