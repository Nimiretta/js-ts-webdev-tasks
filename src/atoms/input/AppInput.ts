import { TInput } from '../../types';

export function AppInputAtom({
    type = 'text',
    placeholder = 'Enter your email address...',
    wrapperClasses = [],
    inputClasses = [],
    icon,
}: TInput): HTMLDivElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex items-center rounded-5xl p-3 bg-white';
    wrapper.classList.add(...wrapperClasses);

    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.className =
        'w-full border-none outline-none text-gray-500 text-sm bg-transparent placeholder-gray-400 focus:outline-none';
    input.classList.add(...inputClasses);

    if (icon) {
        input.style.backgroundImage = `url('${icon}')`;
        input.style.backgroundRepeat = 'no-repeat';
        input.style.backgroundPosition = 'left 12px center';
        input.classList.add('pl-10');
    }

    wrapper.appendChild(input);

    return wrapper;
}
