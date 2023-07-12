import { addEventListenerOnce } from 'shared/functions';

export class AccordionClass {
    accordions: HTMLElement[];

    constructor() {
        this.accordions = Array.from(document.querySelectorAll('.accordion-section'));
        this.addAccordionListeners();
    }

    private addAccordionListeners(accordions: HTMLElement[] = this.accordions): void {
        accordions.forEach((accordion: HTMLElement) => {
            const accordionButton = accordion.querySelector('.accordion-button');
            addEventListenerOnce(accordionButton, () => {
                this.toggleAccordionStatus(accordion);
            });
        });
    }

    private toggleAccordionStatus(accordion: HTMLElement): void {
        accordion.classList.toggle('active');
        const content: HTMLElement = accordion.querySelector('.accordion-content') as HTMLElement;
        if (content.style.maxHeight) {
            content.style.maxHeight = '';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }
}
