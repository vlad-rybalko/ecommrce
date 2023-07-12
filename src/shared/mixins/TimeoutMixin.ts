import { Component, Vue } from 'vue-facing-decorator';

@Component
export default class TimeoutMixin extends Vue {
    tm_timeoutDelay = 500;
    tm_longTimeoutDelay = 4000;
    tm_timeout: number | null = null;
    tm_clearTimeout() {
        if (this.tm_timeout !== null) {
            clearTimeout(this.tm_timeout);
            this.tm_timeout = null;
        }
    }
    tm_startTimeout(callback: () => void) {
        this.tm_timeout = setTimeout(() => {
            callback();
        }, this.tm_timeoutDelay);
    }

    tm_startLongTimeout(callback: () => void) {
        if (this.tm_timeout === null) {
            this.tm_timeout = setTimeout(() => {
                callback();
            }, this.tm_longTimeoutDelay);
        }
    }
}
