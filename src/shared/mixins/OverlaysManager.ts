/* THIS COMPONENT INCLUDING IN ALL PAGES
--------------------------------------------- */
import { hideJivoIfExists, showJivo } from 'shared/functions';
import DeviceManager from 'shared/modules/DeviceManager';
import ToggleHtmlScrollLine from 'shared/modules/ToggleHtmlScrollLine';

export default class OverlaysManager {
    private overlayNames: string[] = [];

    constructor() {
        this.listenEvents();
    }

    private listenEvents() {
        window.addEventListener('orientationchange', () => {
            this.hideAllOverlays();
        });
        document.addEventListener(OverlaysManagerEvent.Add, (e: Event) => {
            const overlayName = (e as CustomEvent).detail as string;
            this.handleOverlayAdding(overlayName);
        });
        document.addEventListener(OverlaysManagerEvent.Opened, (e: Event) => {
            const openedOverlayName = (e as CustomEvent).detail as string;
            this.handleOverlayOpening(openedOverlayName);
        });
        document.addEventListener(OverlaysManagerEvent.Closed, (e: Event) => {
            const closedOverlayName = (e as CustomEvent).detail as string;
            this.handleOverlayClosing(closedOverlayName);
        });
    }

    private handleOverlayAdding(overlayName: string) {
        if (this.overlayNames.includes(overlayName)) {
            throw new TypeError(`OverlaysManager already contains overlay with name ${overlayName}`);
        }
        this.overlayNames.push(overlayName);
    }

    private handleOverlayOpening(openedOverlayName: string) {
        if (!this.overlayNames.includes(openedOverlayName)) {
            throw new TypeError(
                `OverlaysManager does not contain overlay with name ${openedOverlayName}. You must register it first.`,
            );
        }
        const restOverlays = this.overlayNames.filter((name) => name !== openedOverlayName);
        restOverlays.forEach((overlayName) => this.closeOverlay(overlayName));
        this.makeMobileAdjustmentsOnOpening();
    }

    private handleOverlayClosing(closedOverlayName: string) {
        this.makeMobileAdjustmentsOnClosing();
    }

    private closeOverlay(overlayName: string) {
        document.dispatchEvent(new CustomEvent(OverlaysManager.closeEventName(overlayName)));
    }

    static closeEventName(overlayName: string) {
        return `${OverlaysManagerEvent.Close}-${overlayName}`;
    }

    private hideAllOverlays() {
        this.overlayNames.forEach((overlayName) => this.closeOverlay(overlayName));
        this.makeMobileAdjustmentsOnClosing();
    }

    private makeMobileAdjustmentsOnOpening() {
        if (DeviceManager.isMobile) {
            ToggleHtmlScrollLine.toggle('disable');
            hideJivoIfExists();
        }
    }

    private makeMobileAdjustmentsOnClosing() {
        if (DeviceManager.isMobile) {
            ToggleHtmlScrollLine.toggle('enable');
            showJivo();
        }
    }
}

export enum OverlaysManagerEvent {
    Add = 'overlay-manager-add',
    Opened = 'overlay-manager-opened',
    Close = 'overlay-manager-close',
    Closed = 'overlay-manager-closed',
}
