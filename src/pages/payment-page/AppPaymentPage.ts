import { AppOrderFlow } from '../../templates';
import { AppInputSet } from '../../molecules';
import { deleteCart, getCart } from '../../backend';
import { TInput, TInputContainer } from '../../types';

export async function AppPaymentPage({
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
                btnText: 'Place an Order',
                btnForm: {
                    btnType: 'submit' as const,
                    formId: 'payment-form',
                },
            };
            const container = AppOrderFlow({
                page: 'payment',
                titleText: 'Payment',
                dynamicPart: {
                    createLeftComp: AppInputSet,
                    params: {
                        formId: 'payment-form',
                        validateForm: validatePaymentForm,
                        additionalAction: {
                            callback: deleteCartOnSubmit,
                            param: cartId,
                        },
                        path: '/confirmation',
                        inputs: getInputTypes(),
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

function getInputTypes(): TInput[] {
    return [
        {
            placeholder: 'Card Number',
            id: 'cardNumber',
            formatter: formatGroups,
        },
        {
            placeholder: 'Card expire',
            id: 'cardExpire',
            formatter: formatCardExpire,
        },
        {
            placeholder: 'IBAN',
            id: 'iban',
            formatter: formatGroups,
        },
    ];
}

function formatGroups(str: string): string {
    const cleanedInput = str.replace(/\s/g, '');
    const formattedString = cleanedInput.replace(/(.{4})/g, '$1 ');
    return formattedString.trim();
}

function formatCardExpire(str: string): string {
    const cleanedInput = str.replace(/\D/g, '');
    const limitedInput = cleanedInput.slice(0, 4);
    if (limitedInput.length > 2) {
        return limitedInput.slice(0, 2) + '/' + limitedInput.slice(2);
    }
    return limitedInput;
}

function validateCardNumber(input: TInputContainer): boolean {
    const value = input.getValue();
    if (!input || !value) {
        input?.setError(true, 'Cannot be empty');
        return false;
    }

    const cleanedСardNumber = value.replace(/\s/g, '');
    const cardNumberRegex = /^\d+$/;
    if (!cardNumberRegex.test(cleanedСardNumber)) {
        input.setError(true, 'Only numbers can be used');
        return false;
    }

    if (value.length < 3 || value.length > 32) {
        input.setError(true, 'Length should be 3-32 symbols');
        return false;
    }
    return true;
}

function validateCardExpire(input: TInputContainer): boolean {
    const value = input.getValue();
    if (!input || !value) {
        input?.setError(true, 'Cannot be empty');
        return false;
    }

    const cardExpireRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (!cardExpireRegex.test(value)) {
        input.setError(true, 'Incorrect format');
        return false;
    }

    const [month, year] = value.split('/');

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    const inputYear = parseInt(year);
    const inputMonth = parseInt(month);

    if (
        inputYear < currentYear ||
        (inputYear === currentYear && inputMonth < currentMonth)
    ) {
        input.setError(true, 'Expire date should be in the future');
        return false;
    }

    return true;
}

function validateIBAN(input: TInputContainer): boolean {
    const value = input.getValue();
    if (!input || !value) {
        input?.setError(true, 'Cannot be empty');
        return false;
    }

    const cleanedIBAN = value.replace(/\s/g, '');
    const ibanRegex = /^[A-Z]{2}\d+$/;

    if (!ibanRegex.test(cleanedIBAN)) {
        input.setError(
            true,
            'Incorrect format (e.g. ESXX XXXX XXXX XXXX XXXX XXXX)'
        );
        return false;
    }

    if (cleanedIBAN.length < 15 || cleanedIBAN.length > 34) {
        input.setError(true, 'Length should be 15-34 symbols');
        return false;
    }

    return true;
}

function validatePaymentForm(inputs: {
    [key: string]: TInputContainer;
}): boolean {
    const isCardNumberCorrect = validateCardNumber(inputs.cardNumber);
    const isCardExpireCorrect = validateCardExpire(inputs.cardExpire);
    const isIbanCorrect = validateIBAN(inputs.iban);
    return isCardExpireCorrect && isCardNumberCorrect && isIbanCorrect;
}

async function deleteCartOnSubmit(cartId: string | number) {
    return await deleteCart(cartId);
}
