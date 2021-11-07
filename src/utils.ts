export function combineClassnames(...classNames: Array<string | undefined>): string {
    return classNames.filter(className => !!className).join(' ');
}
