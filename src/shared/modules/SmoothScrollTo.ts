/* THIS COMPONENT INCLUDING IN ALL PAGES
---------------------------------------------*/

/* SMOOTH SCROLL TO
--------------------------*/

export default class SmoothScrollTo {
    private anchorLinks: HTMLAnchorElement[] = [];

    constructor() {
        this.selectProbableAnchorLinks();
    }

    static scrollToPosition(top: number, instant = false) {
        window.scrollTo({
            top: top,
            behavior: instant ? undefined : 'smooth',
        });
    }

    static scrollTo(anchor: string | Element, instant = false) {
        let element = anchor as HTMLElement;
        if (typeof anchor === 'string') {
            const screenedString = anchor.replace(/\d/g, (match) => {
                return '\\3' + match;
            });
            element = document.querySelector(screenedString) as HTMLElement;
        }
        if (!element) {
            return;
        }
        const behavior = instant ? undefined : 'smooth';

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - this.toplineHeight;
        window.scrollBy({
            top: offsetPosition,
            behavior: behavior,
        });
    }

    private static get toplineHeight() {
        const paddingTop = 30;
        return (
            (document.querySelector('.topline')?.clientHeight ?? 0) +
            (document.querySelector('.ds-main-content-container')?.clientHeight ?? 0) +
            paddingTop
        );
    }

    private selectProbableAnchorLinks() {
        const probablyAnchorLinks = Array.from(document.querySelectorAll('[href*="#"]')) as HTMLAnchorElement[];
        this.anchorLinks = probablyAnchorLinks.filter(
            (testedLink) => testedLink.getAttribute('href')?.charAt(0) === '#',
        );
        this.setListenerOnAnchorLinks();
    }

    private setListenerOnAnchorLinks() {
        for (const link of this.anchorLinks) {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                SmoothScrollTo.scrollTo((event.target as HTMLAnchorElement).hash);
            });
        }
    }
}
