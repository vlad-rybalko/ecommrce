import { ref, onBeforeMount } from 'vue';

export function useDeviceManager() {
    const isMobile = ref(true);

    const updateDevice = () => {
        isMobile.value = window.innerWidth < 992;
    };

    const addListener = () => {
        window.addEventListener('resize', updateDevice);
    };

    onBeforeMount(() => {
        updateDevice();
        addListener();
    });

    return {
        isMobile,
    };
}
