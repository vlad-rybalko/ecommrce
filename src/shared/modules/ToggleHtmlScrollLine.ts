/* THIS COMPONENT INCLUDING IN ALL PAGES
--------------------------------------------- */
import DeviceManager from './DeviceManager';

export default abstract class ToggleHtmlScrollLine {
    private static currentScroll: number;

    static toggle(state: 'disable' | 'enable') {
        const toggledElems = document.querySelector('html');
        if (state === 'disable' && DeviceManager.isMobile) {
            this.currentScroll = window.scrollY;
            toggledElems?.classList.add('scroll-disabled');
            return;
        }
        toggledElems?.classList.remove('scroll-disabled');
        window.scroll({
            top: this.currentScroll,
            left: 0,
            behavior: undefined,
        });
    }
}
