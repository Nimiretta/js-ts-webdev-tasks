import { TTitleText } from '../../types';
import { AppTitle } from '../../atoms';
import { AppText } from '../../atoms/text/AppText';

export function AppTitleText({
    titleText, //if you have underline word, include it also here (write full phrase)
    spanText, //only underline word
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
        ...titleClasses,
    });

    if (spanText) {
        title.innerHTML = titleText.replace(spanText, `<u>${spanText}</u>`);
    }

    block.append(title);

    const paragraphContent = AppText({
        textContent: paragraph,
        ...paragraphClasses,
    });
    block.append(paragraphContent);

    return block;
}
