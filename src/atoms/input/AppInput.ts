import { TInput } from '../../types';

export function AppInputAtom({
    type = 'text',
    placeholder = '',
    wrapperClasses = [],
    inputClasses = [],
    icon,
    label,
    error = false,
}: TInput): {
    wrapper: HTMLDivElement;
    setError: (hasError: boolean, message?: string) => void;
    getValue: () => string;
} {
    const wrapper = document.createElement('div');
    wrapper.classList.add(
        'flex',
        'items-center',
        'rounded-5xl',
        'p-3',
        'bg-white',
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

    const errorContainer = document.createElement('div');
    errorContainer.classList.add('text-red-500', 'text-sm', 'mt-1');
    errorContainer.style.display = error ? 'block' : 'none';

    wrapper.appendChild(input);
    wrapper.appendChild(errorContainer);

    const setError = (hasError: boolean, message: string = '') => {
        errorContainer.style.display = hasError ? 'block' : 'none';
        errorContainer.textContent = hasError ? message : '';
        input.classList.toggle('border-red-500', hasError);

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
