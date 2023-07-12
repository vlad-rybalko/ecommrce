export class ScrollTracker {
    private prevScrollY: number;
    private readonly scrollUpHandler: () => void;
    private readonly scrollDownHandler: () => void;

    constructor(scrollUpHandler: () => void, scrollDownHandler: () => void) {
        this.prevScrollY = window.scrollY;
        this.scrollUpHandler = scrollUpHandler;
        this.scrollDownHandler = scrollDownHandler;

        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    private handleScroll() {
        const currentScrollY = window.scrollY;
        const scrollDifference = currentScrollY - this.prevScrollY;

        if (currentScrollY <= 0) {
            return;
        }

        if (scrollDifference < 0) {
            this.scrollUpHandler();
        } else {
            this.scrollDownHandler();
        }

        this.prevScrollY = currentScrollY;
    }

    public destroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
