let arrowsToggleFocus = {
    data() {
        return {
            currentFocus: 0,
        };
    },
    methods: {
        arrowsToggleFocus($event) {
            let focusIntakeElements = $event.currentTarget.querySelectorAll('input[type="text"], [tabindex]');
            switch ($event.key) {
                case 'ArrowDown':
                    this.currentFocus++;
                    if (this.currentFocus === focusIntakeElements.length) {
                        this.currentFocus = 1;
                    }
                    break;
                case 'ArrowUp':
                    this.currentFocus--;
                    if (this.currentFocus < 0) {
                        this.currentFocus = 0;
                    }
                    break;
            }
            if (focusIntakeElements.length > 1) {
                focusIntakeElements[this.currentFocus].focus();
            }
        },
        tabToggleFocus($event) {
            if ($event.shiftKey) {
                this.currentFocus--;
                return;
            }
            this.currentFocus++;
        },
        resetKeyboardFocus() {
            this.currentFocus = 0;
        },
    },
};

export default arrowsToggleFocus;
