/**
 * href attribute is absent because it is not required in this project
 * @param isActive set the black color if true (for breadcrumbs)
 */
export function AppLabelLink(text: string, isActive: boolean = false) {
    const labelLink = document.createElement('a');
    const textColor = isActive ? 'text-black' : 'text-text-primary';
    labelLink.classList.add(textColor, 'font-rubik', 'text-base');
    labelLink.textContent = text;
    return labelLink;
}
