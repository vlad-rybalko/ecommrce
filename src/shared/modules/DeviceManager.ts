export default abstract class DeviceManager {
    private static isMobileValue: boolean | undefined = undefined;

    static get isMobile() {
        return this.isMobileValue;
    }

    static refresh() {
        this.isMobileValue = document.documentElement.clientWidth < 992;
    }
}
