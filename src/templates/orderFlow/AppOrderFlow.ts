import { AppBreadcrumbs } from '../../molecules';
import { AppOrderSummary } from '../../organisms';
import { AppTitle } from '../../atoms';
import { TOrderFlow, TCreateCartList, TCreateInputSet } from '../../types';

export function AppOrderFlow({
    page,
    titleText,
    dynamicPart,
    summaryParams,
}: TOrderFlow): HTMLDivElement {
    const orderFlow = document.createElement('div');
    orderFlow.classList.add('w-full', 'flex', 'flex-col', 'gap-5');

    const breadcrumbs = AppBreadcrumbs({ page });

    const title = AppTitle({
        textContent: titleText,
        classes: ['font-poppins', 'text-black', 'text-[40px]'],
    });

    const mainBlock = document.createElement('div');
    mainBlock.classList.add('w-full', 'flex', 'gap-5');
    const leftPart = Array.isArray(dynamicPart.params)
        ? (dynamicPart as TCreateCartList).createLeftComp(dynamicPart.params)
        : (dynamicPart as TCreateInputSet).createLeftComp(dynamicPart.params);
    leftPart.classList.add('w-3/5');
    const orderSummary = AppOrderSummary(summaryParams);
    orderSummary.classList.add('w-2/5');
    mainBlock.append(leftPart, orderSummary);

    orderFlow.append(breadcrumbs, title, mainBlock);
    return orderFlow;
}
