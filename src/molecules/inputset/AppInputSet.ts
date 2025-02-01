import { AppInput } from '../../atoms';
import { TInput, TInputSet } from '../../types';

export function AppInputSet({
    formId,
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

    if (inputs) {
        inputs.forEach((inputConfig) => {
            const input = AppInput(inputConfig);
            container.appendChild(input.container);
        });
    }

    if (sections) {
        sections.forEach((section, index) => {
            const sectionContainer = document.createElement('div');
            sectionContainer.classList.add('flex', 'flex-col', 'gap-[1.5rem]');

            section.inputs.forEach((inputConfig: TInput) => {
                const input = AppInput(inputConfig);
                sectionContainer.appendChild(input.container);
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

    return container;
}
