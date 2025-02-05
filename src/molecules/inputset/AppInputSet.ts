import { AppInput } from '../../atoms';
import router from '../../router';
import { TInput, TInputContainer, TInputSet } from '../../types';

export function AppInputSet({
    formId,
    validateForm,
    additionalAction,
    path,
    inputs,
    sections,
}: TInputSet): HTMLFormElement {
    const container = document.createElement('form');
    container.setAttribute('id', formId);
    container.classList.add(
        'flex',
        'flex-col',
        'h-fit',
        'p-[1.25rem]',
        'gap-[1.5rem]',
        'rounded-[1.25rem]',
        'border',
        'border-border-gray'
    );

    const formInputs: { [key: string]: TInputContainer } = {};

    if (inputs) {
        inputs.forEach((inputConfig) => {
            const input = AppInput(inputConfig);
            container.appendChild(input.container);
            if (inputConfig.id) {
                formInputs[inputConfig.id] = input;
            }
        });
    }

    if (sections) {
        sections.forEach((section, index) => {
            const sectionContainer = document.createElement('div');
            sectionContainer.classList.add('flex', 'flex-col', 'gap-[1.5rem]');

            section.inputs.forEach((inputConfig: TInput) => {
                const input = AppInput(inputConfig);
                sectionContainer.appendChild(input.container);
                if (inputConfig.id) {
                    formInputs[inputConfig.id] = input;
                }
            });

            container.appendChild(sectionContainer);

            if (index < sections.length - 1) {
                const divider = document.createElement('div');
                divider.classList.add(
                    'w-[41.6875rem]',
                    'h-[0.0625rem]',
                    'border-border-gray'
                );
                container.appendChild(divider);
            }
        });
    }

    container.addEventListener('submit', async (event) => {
        event.preventDefault();
        const isValidationPassed = validateForm(formInputs);
        if (!isValidationPassed) {
            return;
        }
        try {
            const isSuccess = additionalAction
                ? await additionalAction.callback(additionalAction.param)
                : true;
            if (isSuccess) {
                router.navigate(path);
            } else {
                throw new Error('Something went wrong');
            }
        } catch (err) {
            container.innerHTML = `<h1>Error</h1> <pre>${err}</pre>`;
        }
    });

    return container;
}
