import { TInput } from '../../types';

export function AppInputAtom({
    type = 'text',
    placeholder = 'Enter your email address...',
    wrapperClasses = [],
    inputClasses = [],
    icon,
}: TInput): HTMLDivElement {
    const wrapper = document.createElement('div');
    wrapper.classList.add(
        'flex',
        'items-center',
        'rounded-5xl',
        'p-3',
        'bg-white',
        ...wrapperClasses
    );

    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.classList.add(
        'w-full',
        'border-none',
        'outline-none',
        'text-gray-500',
        'text-sm',
        'bg-transparent',
        'placeholder-gray-400',
        'focus:outline-none',
        ...inputClasses
    );

    if (icon) {
        input.classList.add('bg-left-3', 'bg-no-repeat', 'pl-10');
        input.style.backgroundImage = `url('${icon}')`;
    }

    wrapper.appendChild(input);

    return wrapper;
}
