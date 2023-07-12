<template>
    <div className="user-page">
        <UserIcon class="user-page__icon" />
        <h1>Вы вошли в аккаунт!</h1>
        <RoundedButton v-if="store.isAuth" @click="logOut" title="Выйти из аккаунта" />
    </div>
</template>

<script setup lang="ts">
import UserIcon from 'shared/images/icons/user.svg?component';
import RoundedButton from 'shared/components/rounded-button.vue';
import { useAuthStore } from '~/store/auth';

definePageMeta({
    middleware: ['auth'],
});

const store = useAuthStore();
const router = useRouter();

function logOut() {
    store.clearToken();
    router.push('/login');
}
</script>

<style lang="scss">
.user-page {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 50vh;
}

.user-page__icon {
    height: 65px;
}
</style>
