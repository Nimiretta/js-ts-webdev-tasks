export function AppCounter(
    width: string = 'w-full',
    height: string = 'h-12'
): {
    counterNode: HTMLDivElement;
    getValue: () => number;
} {
    const counterNode = document.createElement('div');
    counterNode.classList.add(
        'bg-bg-gray',
        'rounded-full',
        width,
        height,
        'flex',
        'items-center',
        'justify-between',
        'text-black',
        'font-rubik',
        'text-base',
        'font-semibold',
        'px-5'
    );

    let counterValue = 1;
    const counterDisplay = document.createElement('span');
    counterDisplay.textContent = counterValue.toString();

    const incrementBtn = document.createElement('button');
    incrementBtn.classList.add('text-2xl');
    incrementBtn.textContent = '+';
    incrementBtn.addEventListener('click', () => {
        counterValue++;
        counterDisplay.textContent = counterValue.toString();
    });

    const decrementBtn = document.createElement('button');
    decrementBtn.classList.add('text-2xl');
    decrementBtn.textContent = '-';
    decrementBtn.addEventListener('click', () => {
        if (counterValue > 1) {
            counterValue--;
            counterDisplay.textContent = counterValue.toString();
        }
    });

    const getValue = () => counterValue;

    counterNode.append(decrementBtn, counterDisplay, incrementBtn);

    return { counterNode, getValue };
}
