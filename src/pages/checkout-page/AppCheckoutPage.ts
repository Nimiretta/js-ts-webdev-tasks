import { AppOrderFlow } from '../../templates';
import { AppInputSet } from '../../molecules';
import { getCart } from '../../backend';
import { TInputContainer, TInputSection } from '../../types';

export async function AppCheckoutPage({
    data: { cartId },
}: {
    data: { cartId: string | number };
}): Promise<HTMLElement> {
    const page = document.createElement('main');
    try {
        const cart = await getCart(cartId);
        if (cart) {
            const summaryParams = {
                total: cart.total,
                discountedTotal: cart.discountedTotal,
                btnText: 'Go to Payment',
                btnForm: {
                    btnType: 'submit' as const,
                    formId: 'checkout-form',
                },
            };
            const container = AppOrderFlow({
                page: 'payment',
                titleText: 'Payment',
                dynamicPart: {
                    createLeftComp: AppInputSet,
                    params: {
                        formId: 'checkout-form',
                        validateForm: validateCheckoutForm,
                        path: `/payment/${cartId}`,
                        sections: getInputGroups(),
                    },
                },
                summaryParams,
            });
            page.append(container);
        } else {
            throw new Error(`Cart with ID ${cartId} not found`);
        }
    } catch (err) {
        page.innerHTML = `<h1>Error</h1> <pre>${err}</pre>`;
    }
    return page;
}

function getInputGroups(): TInputSection[] {
    return [
        {
            inputs: [
                {
                    placeholder: 'First name',
                    id: 'firstName',
                },
                {
                    placeholder: 'Last name',
                    id: 'lastName',
                },
                {
                    placeholder: 'Maiden name',
                    id: 'maidenName',
                },
            ],
        },
        {
            inputs: [
                {
                    type: 'email',
                    placeholder: 'Email',
                    id: 'email',
                },
                {
                    placeholder: 'Phone',
                    id: 'phone',
                    formatter: formatPhoneNumber,
                },
            ],
        },
        {
            inputs: [
                {
                    placeholder: 'Address',
                    id: 'address',
                },
                {
                    placeholder: 'City',
                    id: 'city',
                },
                {
                    placeholder: 'Postal code',
                    id: 'postalCode',
                },
            ],
        },
    ];
}

function formatPhoneNumber(str: string): string {
    let cleaned = str.replace(/[^\d+]/g, '');
    cleaned = cleaned.replace(/(?<!^)\+/g, '');

    if (!cleaned.startsWith('+')) {
        cleaned = '+' + cleaned;
    }

    let formatted = cleaned.slice(0, 3);
    const remainingDigits = cleaned.slice(3);

    for (let i = 0; i < remainingDigits.length; i += 3) {
        formatted += ' ' + remainingDigits.slice(i, i + 3);
    }

    return formatted.trim();
}

function validateEmptyField(input: TInputContainer): boolean {
    const value = input.getValue();
    if (!input || !value) {
        input?.setError(true, 'Cannot be empty');
        return false;
    }
    return true;
}

function validateCommonText(input: TInputContainer): boolean {
    if (!validateEmptyField(input)) {
        return false;
    }

    const value = input.getValue();

    if (value.length < 3 || value.length > 32) {
        input.setError(true, 'Length should be 3-32 symbols');
        return false;
    }

    if (!/[a-zA-Z]/.test(value)) {
        input.setError(true, 'Should contain at least one letter');
        return false;
    }

    return true;
}

function validateEmail(input: TInputContainer): boolean {
    if (!validateEmptyField(input)) {
        return false;
    }

    const value = input.getValue();

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(value)) {
        input.setError(true, 'Incorrect email format');
        return false;
    }

    return true;
}

function validatePhoneNumber(input: TInputContainer): boolean {
    if (!validateEmptyField(input)) {
        return false;
    }

    const value = input.getValue();

    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        input.setError(true, 'Phone number should contain 7-15 digits');
        return false;
    }

    return true;
}

function validateAddress(input: TInputContainer): boolean {
    if (!validateEmptyField(input)) {
        return false;
    }

    const value = input.getValue();

    if (value.length < 5 || value.length > 100) {
        input.setError(true, 'Length should be 5-100 symbols');
        return false;
    }

    const addressRegex = /^[a-zA-Z0-9\s.,'#-]+$/;
    if (!addressRegex.test(value)) {
        input.setError(
            true,
            "Should contain only letters, numbers and symbols .,'#-"
        );
        return false;
    }

    if (!/\d/.test(value)) {
        input.setError(true, 'Should contain at least 1 number');
        return false;
    }

    if (!/[a-zA-Z]/.test(value)) {
        input.setError(true, 'Should contain at least 1 letter');
        return false;
    }

    return true; // Если все проверки пройдены
}

function validatePostCode(input: TInputContainer): boolean {
    if (!validateEmptyField(input)) {
        return false;
    }

    const value = input.getValue();

    const postalCodeRegex = /^[A-Z0-9\s]+$/;

    if (!postalCodeRegex.test(value)) {
        input.setError(
            true,
            'Should contain only capital letters, numbers and spaces'
        );
        return false;
    }

    if (value.length < 3 || value.length > 10) {
        input.setError(true, 'Length should be 3-10 symbols');
        return false;
    }

    return true;
}

function validateCheckoutForm(inputs: {
    [key: string]: TInputContainer;
}): boolean {
    const results: boolean[] = [];
    Object.keys(inputs).forEach((id) => {
        switch (id) {
            case 'firstName':
            case 'lastName':
            case 'maidenName':
            case 'city':
                results.push(validateCommonText(inputs[id]));
                break;
            case 'email':
                results.push(validateEmail(inputs[id]));
                break;
            case 'phone':
                results.push(validatePhoneNumber(inputs[id]));
                break;
            case 'address':
                results.push(validateAddress(inputs[id]));
                break;
            case 'postalCode':
                results.push(validatePostCode(inputs[id]));
                break;
        }
    });
    return !results.includes(false);
}
