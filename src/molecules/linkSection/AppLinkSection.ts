import { AppTitle, AppLabelLink } from '../../atoms';
import { TitleTag, TLinkSection } from '../../types';

export function AppLinkSection({
    heading,
    links,
    width = 'w-full',
    classes = [],
}: TLinkSection): HTMLDivElement {
    const section = document.createElement('div');
    section.classList.add('flex', 'flex-col', 'gap-6', width, ...classes);

    const title = AppTitle({
        tag: TitleTag.H4,
        textContent: heading.toUpperCase(),
        classes: [
            'font-rubik',
            'text-base',
            'tracking-[.1875rem]',
            'text-black',
            'font-medium',
        ],
    });

    const linkContainer = document.createElement('ul');
    linkContainer.classList.add('list-none', 'flex', 'flex-col', 'gap-3');
    links.forEach((link) => {
        const li = document.createElement('li');
        li.append(AppLabelLink(link));
        linkContainer.append(li);
    });

    section.append(title, linkContainer);
    return section;
}
