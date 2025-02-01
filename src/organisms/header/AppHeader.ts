import { AppSignupBanner, AppLogoString } from '../../molecules';

export function AppHeader(cartId: string | number) {
    const header = document.createElement('div');
    const signupWrapper = document.createElement('div');
    signupWrapper.classList.add('bg-black', 'w-dvw');
    const signupBanner = AppSignupBanner();
    signupWrapper.append(signupBanner);

    const logoString = AppLogoString(cartId);
    logoString.classList.add('border-b', 'border-border-gray');

    header.append(signupWrapper, logoString);
    return header;
}
