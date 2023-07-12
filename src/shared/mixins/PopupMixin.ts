import { Component, Vue } from 'vue-facing-decorator';
import TimeoutMixin from './TimeoutMixin';
import DeviceManager from 'shared/modules/DeviceManager';
import OverlaysManager, { OverlaysManagerEvent } from './OverlaysManager';

@Component({
    mixins: [TimeoutMixin],
})
export default class PopupMixin extends Vue {
    pm_isPopupShown = false;
    pm_overlayName: string | undefined;

    get pm_isMobile() {
        return DeviceManager.isMobile;
    }

    set pm_popupShown(val: boolean) {
        this.pm_isPopupShown = val;
        if (val) {
            this.pm_onPopupShown?.();
            this.pm_notifyOverlaysManagerAboutOpening();
            return;
        }
        this.pm_onPopupHidden?.();
        this.pm_notifyOverlaysManagerAboutClosing();
    }

    get pm_popupShown() {
        return this.pm_isPopupShown;
    }

    pm_onPopupShown(): void {
        console.warn('pm_onPopupShown function not defined!');
    }

    pm_onPopupHidden(): void {
        console.warn('pm_onPopupHidden function not defined!');
    }

    pm_mouseEnter() {
        if (this.pm_isMobile) {
            return;
        }
        this.tm_clearTimeout();
        this.pm_popupShown = true;
    }

    pm_mouseLeave() {
        if (!this.pm_isMobile) {
            this.tm_startTimeout(() => {
                this.pm_popupShown = false;
            });
        }
    }

    pm_triggerButtonClick() {
        if (this.pm_isMobile) {
            this.pm_togglePopupShown();
        }
    }

    pm_togglePopupShown() {
        this.pm_popupShown = !this.pm_popupShown;
    }

    pm_addToOverlaysManager(overlayName: string) {
        this.pm_overlayName = overlayName;
        document.dispatchEvent(new CustomEvent(OverlaysManagerEvent.Add, { detail: overlayName }));
        document.addEventListener(OverlaysManager.closeEventName(this.pm_overlayName), () => {
            this.pm_isPopupShown = false;
            this.pm_onPopupHidden?.();
        });
    }

    pm_notifyOverlaysManagerAboutOpening() {
        if (!this.pm_overlayName) {
            return;
        }
        document.dispatchEvent(
            new CustomEvent(OverlaysManagerEvent.Opened, {
                detail: this.pm_overlayName,
            }),
        );
    }

    pm_notifyOverlaysManagerAboutClosing() {
        if (!this.pm_overlayName) {
            return;
        }
        document.dispatchEvent(
            new CustomEvent(OverlaysManagerEvent.Closed, {
                detail: this.pm_overlayName,
            }),
        );
    }
}
