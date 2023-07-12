/*
THIS COMPONENT INCLUDING IN ALL PAGES
 ---------------------------------------------*/

import SmoothScrollTo from './SmoothScrollTo';

/* SCROLL TOP TOP
--------------------------*/

export default class ScrollToTop {
    private element: HTMLElement;
    private static instance: ScrollToTop;

    static scrollUp() {
        SmoothScrollTo.scrollToPosition(0);
    }

    constructor() {
        const element = document.querySelector('.scroll-top-wrapper');
        if (!element) {
            throw new TypeError("Couldn't find scroll to top button");
        }
        this.element = element as HTMLElement;
        document.addEventListener('scroll', this.scrollHandler.bind(this));
        this.element.addEventListener('click', ScrollToTop.scrollUp);
        ScrollToTop.instance = this;
    }

    static hide() {
        this.instance.element.classList.add('hidden');
    }

    scrollHandler() {
        if (window.scrollY > 100) {
            this.element.classList.add('show');
        } else {
            this.element.classList.remove('show');
        }
    }
}
