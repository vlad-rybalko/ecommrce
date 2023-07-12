import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(() => {
    const store = useAuthStore();
    const router = useRouter();

    if (!store.isAuth) {
        router.push('/login');
    }
});
