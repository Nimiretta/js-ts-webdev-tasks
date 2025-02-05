import { AppButton, AppInput, AppTitle } from '../../atoms';
import { subscribeToNewsletter } from '../../backend';

const roundedFull = 'rounded-[3.88rem]';
const inputWidth = 'w-[21.81rem]';
const paddingSmall = 'p-[0.75rem]';
const gapSmall = 'gap-[0.75rem]';

const buttonClasses = [
    inputWidth,
    paddingSmall,
    gapSmall,
    roundedFull,
    'font-medium',
];
const inputClasses = [
    'flex',
    inputWidth,
    paddingSmall,
    'items-start',
    gapSmall,
    roundedFull,
    'bg-white',
];

export function NewsletterSubscription() {
    const subscriptionContainer = document.createElement('div');
    subscriptionContainer.classList.add(
        'flex',
        'max-w-[77.5rem]',
        'p-[2.25rem_4rem]',
        'justify-between',
        'items-center',
        'rounded-[1.25rem]',
        'bg-black',
        'mx-auto'
    );

    const title = AppTitle({
        textContent: 'STAY UP TO DATE ABOUT OUR LATEST OFFERS',
        classes: [
            'w-[34.44rem]',
            'h-[5.88rem]',
            'flex-shrink-0',
            'text-white',
            'font-poppins',
            'text-[2.5rem]',
            'leading-[2.81rem]',
        ],
    });

    const form = document.createElement('form');
    form.classList.add('flex', 'flex-col', 'gap-4');

    const emailIcon = new URL('./emailIcon.svg', import.meta.url).href;

    const inputComponent = AppInput({
        type: 'email',
        placeholder: 'Enter your email address',
        wrapperClasses: inputClasses,
        icon: emailIcon,
    });

    const button = AppButton({
        label: 'Subscribe to Newsletter',
        backgroundColor: 'bg-white',
        textColor: 'text-black',
        classes: buttonClasses,
        onClick: async () => {
            const email = inputComponent.getValue();
            if (!validateEmail(email)) {
                inputComponent.setError(true, 'Please enter a valid email.');
                return;
            }

            try {
                await subscribeToNewsletter(email);
                subscriptionContainer.innerHTML =
                    "<p class='text-white text-[2rem] font-bold'>Success! You've subscribed to our newsletter.</p>";
            } catch (error) {
                console.error('Subscription failed:', error);
            }
        },
    });

    form.appendChild(inputComponent.container);
    form.appendChild(button);

    subscriptionContainer.appendChild(title);
    subscriptionContainer.appendChild(form);

    return subscriptionContainer;
}

const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};
