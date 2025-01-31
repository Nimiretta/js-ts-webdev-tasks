import { TInput } from '../../types';

export function AppInput({
    type = 'text',
    placeholder = '',
    wrapperClasses = [],
    inputClasses = [],
    icon = '',
    label,
    error = false,
    bgColor = 'bg-bg-gray',
}: TInput): {
    container: HTMLDivElement;
    setError: (hasError: boolean, message?: string) => void;
    getValue: () => string;
} {
    const container = document.createElement('div');
    container.classList.add('flex', 'flex-col');

    const wrapper = document.createElement('div');
    wrapper.classList.add(
        'flex',
        'items-center',
        'gap-2',
        'border',
        'border-transparent',
        'rounded-full',
        'p-3',
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
        'text-base',
        'bg-transparent',
        'placeholder-discount-gray',
        'focus:outline-none',
        ...inputClasses
    );

    if (icon) {
        const iconElement = document.createElement('img');
        iconElement.src = icon;
        iconElement.alt = 'input icon';
        iconElement.classList.add('w-6', 'h-6');
        wrapper.appendChild(iconElement);
    }

    wrapper.appendChild(input);

    const errorContainer = document.createElement('div');
    errorContainer.classList.add('text-discount-text-red', 'text-sm', 'mt-1');
    errorContainer.style.display = error ? 'block' : 'none';

    container.appendChild(wrapper);
    container.appendChild(errorContainer);

    const setError = (hasError: boolean, message: string = '') => {
        errorContainer.style.display = hasError ? 'block' : 'none';
        errorContainer.textContent = hasError ? message : '';
        wrapper.classList.toggle('border-transparent', !hasError);
        wrapper.classList.toggle('border-discount-text-red', hasError);

        if (hasError) {
            input.addEventListener('input', clearErrorOnInput, { once: true });
        }
    };

    const clearErrorOnInput = () => {
        setError(false);
    };

    const getValue = () => input.value;

    return { container, setError, getValue };
}
