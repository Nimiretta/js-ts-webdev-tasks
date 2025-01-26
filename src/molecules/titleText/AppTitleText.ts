import { TTitleText } from '../../types';
import { AppTitle } from '../../atoms';
import { AppText } from '../../atoms/text/AppText';

export function AppTitleText({
    titleText, //if you have underline word, include it also here (write full phrase)
    spanText, //only underline word
    paragraph,

    textColorParagraph = '#00000099',
    fontSizeParagraph,
    fontFamParagraph,
    fontWeightParagraph,
    lineHeightParagraph,

    fontSizeTitle,
    fontFamTitle,
    fontWeightTitle,
    lineHeightTitle,
    fontColorTitle,

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

    if (spanText) {
        const title = AppTitle({
            textContent: titleText,
            classes: [
                fontSizeTitle,
                fontFamTitle,
                fontWeightTitle,
                lineHeightTitle,
                fontColorTitle,
            ],
        });
        title.innerHTML = titleText.replace(spanText, `<u>${spanText}</u>`);
        title.classList.add(
            fontSizeTitle,
            fontFamTitle,
            fontWeightTitle,
            lineHeightTitle
        );

        block.append(title);
    } else {
        const title = AppTitle({
            textContent: titleText,
            classes: [
                fontSizeTitle,
                fontFamTitle,
                fontWeightTitle,
                lineHeightTitle,
                fontColorTitle,
            ],
        });
        title.textContent = titleText;
        block.append(title);
    }

    const paragraphContent = AppText({
        textContent: paragraph,
        classes: [
            textColorParagraph,
            fontSizeParagraph,
            fontFamParagraph,
            fontWeightParagraph,
            lineHeightParagraph,
        ],
    });
    block.append(paragraphContent);

    return block;
}
