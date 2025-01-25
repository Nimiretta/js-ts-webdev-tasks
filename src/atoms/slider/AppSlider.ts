import './AppSlider.css';

export function AppSlider(): {
    sliderNode: HTMLElement;
    getLowValue: () => number;
    getHighValue: () => number;
} {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('range-slider');

    // Dynamically inject the CSS file
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'AppSlider.css'; // Path to your CSS file
    document.head.appendChild(cssLink);

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

    const onInput = (parent: HTMLElement): void => {
        const slides: NodeListOf<HTMLInputElement> =
            parent.querySelectorAll('input');
        const min: number = parseFloat(slides[0].min);
        const max: number = parseFloat(slides[0].max);

        let slide1: number = parseFloat(slides[0].value);
        const slide2: number = parseFloat(slides[1].value);

        // Ensure slide1 is always less than or equal to slide2
        if (slide1 > slide2) {
            slides[0].value = slide2.toString(); // Reset slide1 to slide2
            slide1 = slide2;
        }

        const percentageMin: number = ((slide1 - min) / (max - min)) * 100;
        const percentageMax: number = ((slide2 - min) / (max - min)) * 100;

        parent.style.setProperty(
            '--range-slider-value-low',
            percentageMin.toString()
        );
        parent.style.setProperty(
            '--range-slider-value-high',
            percentageMax.toString()
        );

        if (display) {
            display.setAttribute('data-low', `$${slide1.toString()}`);
            display.setAttribute('data-high', `$${slide2.toString()}`);
        }
    };

    input1.oninput = () => onInput(sliderContainer);
    input2.oninput = () => onInput(sliderContainer);

    onInput(sliderContainer);

    const getLowValue = () => parseFloat(input1.value);
    const getHighValue = () => parseFloat(input2.value);

    return {
        sliderNode: sliderContainer,
        getLowValue,
        getHighValue,
    };
}

// document.addEventListener('DOMContentLoaded', () => {
//     const slider = AppSlider();
//     document.body.appendChild(slider.sliderNode);

//     window.slider = slider;

//     setInterval(() => {
//         console.log('Loweset Value:', slider.getLowValue(), 'Highest Value:', slider.getHighValue());
//     }, 1000); // Logs the values every 500ms
// });

// Part for the check in console
