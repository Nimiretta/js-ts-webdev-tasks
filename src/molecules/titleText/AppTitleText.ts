import { TTitleText } from '../../types';
import { AppTitle } from '../../atoms';
import { AppText } from '../../atoms/text/AppText';

export function AppTitleText({
    titleText,
    titleInnerHTML,
    paragraph,
    paragraphClasses = [],
    titleClasses = [],
    widthClass,
    heightClass,
}: TTitleText): HTMLElement {
    const block = document.createElement('div');
    block.classList.add(
        'flex',
        'flex-col',
        'justify-between',
        widthClass,
        heightClass
    );

    const title = AppTitle({
        textContent: titleText,
        innerHTML: titleInnerHTML,
        classes: titleClasses,
    });

    block.append(title);

    const paragraphContent = AppText({
        textContent: paragraph,
        classes: paragraphClasses,
    });
    block.append(paragraphContent);

    return block;
}
