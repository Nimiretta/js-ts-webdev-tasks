import { TInput } from '../../types';

export function AppInput({
    type = 'text',
    placeholder = '',
    wrapperClasses = [],
    inputClasses = [],
    icon,
    label,
    error = false,
    bgColor = 'bg-bg-gray',
}: TInput): {
    wrapper: HTMLDivElement;
    setError: (hasError: boolean, message?: string) => void;
    getValue: () => string;
} {
    const wrapper = document.createElement('div');
    wrapper.classList.add(
        'flex',
        'flex-col',
        'rounded-5xl',
        'p-3',
        'border',
        bgColor,
        ...wrapperClasses
    );

    if (label) {
        const labelEl = document.createElement('label');
        labelEl.textContent = label;
        labelEl.classList.add('text-sm', 'font-medium', 'mb-1');
        wrapper.appendChild(labelEl);
    }

    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.classList.add(
        'w-full',
        'border-none',
        'outline-none',
        'text-black',
        'text-sm',
        'bg-transparent',
        'placeholder-discount-gray',
        'focus:outline-none',
        ...inputClasses
    );

    if (icon) {
        input.classList.add('bg-left-3', 'bg-no-repeat', 'pl-10');
        input.style.backgroundImage = `url('${icon}')`;
    }

    const errorContainer = document.createElement('div');
    errorContainer.classList.add('text-discount-text-red', 'text-sm', 'mt-1');
    errorContainer.style.display = error ? 'block' : 'none';

    wrapper.appendChild(input);
    wrapper.appendChild(errorContainer);

    const setError = (hasError: boolean, message: string = '') => {
        errorContainer.style.display = hasError ? 'block' : 'none';
        errorContainer.textContent = hasError ? message : '';
        wrapper.classList.toggle('border-discount-text-red', hasError);

        if (hasError) {
            input.addEventListener('input', clearErrorOnInput, { once: true });
        }
    };

    const clearErrorOnInput = () => {
        setError(false);
    };

    const getValue = () => input.value;

    return { wrapper, setError, getValue };
}
