export function AppSlider(): HTMLElement {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('range-slider');

    const input1 = document.createElement('input');
    input1.type = 'range';
    input1.min = '10';
    input1.max = '2000';
    input1.step = '1';
    input1.value = '10';
    input1.classList.add('range-slider__input');

    const input2 = document.createElement('input');
    input2.type = 'range';
    input2.min = '10';
    input2.max = '2000';
    input2.step = '1';
    input2.value = '2000';
    input2.classList.add('range-slider__input');

    const display = document.createElement('div');
    display.classList.add('range-slider__display');

    sliderContainer.append(input1, input2, display);

    const onInput = (parent: HTMLElement, e: Event): void => {
        const slides: NodeListOf<HTMLInputElement> =
            parent.querySelectorAll('input');
        const min: number = parseFloat(slides[0].min);
        const max: number = parseFloat(slides[0].max);

        let slide1: number = parseFloat(slides[0].value);
        let slide2: number = parseFloat(slides[1].value);

        const percentageMin: number = (slide1 / (max - min)) * 100;
        const percentageMax: number = (slide2 / (max - min)) * 100;

        parent.style.setProperty(
            '--range-slider-value-low',
            percentageMin.toString()
        );
        parent.style.setProperty(
            '--range-slider-value-high',
            percentageMax.toString()
        );

        if (slide1 > slide2) {
            const tmp: number = slide2;
            slide2 = slide1;
            slide1 = tmp;

            if (e?.currentTarget === slides[0]) {
                slides[0].insertAdjacentElement('beforebegin', slides[1]);
            } else {
                slides[1].insertAdjacentElement('afterend', slides[0]);
            }
        }

        if (display) {
            display.setAttribute('data-low', '$' + slide1.toString());
            display.setAttribute('data-high', '$' + slide2.toString());
        }
    };

    input1.oninput = (e: Event) => onInput(sliderContainer, e);
    input2.oninput = (e: Event) => onInput(sliderContainer, e);

    onInput(sliderContainer, new Event(''));

    return sliderContainer;
}
