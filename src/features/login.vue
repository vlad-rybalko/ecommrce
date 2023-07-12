<template>
    <form @submit.prevent="onSubmit" class="login">
        <h1 class="ds-text-2 bold">Вход в личный кабинет</h1>
        <SchInput placeholder="Email или логин" />
        <SchInput placeholder="Пароль" />
        <RoundedButton title="Войти" />
        <span class="login__description">
            Осуществляя вход в «Личный кабинет» сайта, Вы подтверждаете свою дееспособность, согласие на получение
            информации о статусе заказов и согласие на обработку персональных данных.
        </span>
    </form>
</template>

<script setup lang="ts">
import SchInput from 'shared/components/sch-input.vue';
import RoundedButton from 'shared/components/rounded-button.vue';
import { useAuthStore } from '~/store/auth';

const store = useAuthStore();
const router = useRouter();

const onSubmit = () => {
    store.setToken();
    router.push('/user');
};
</script>

<style lang="scss">
.login {
    width: 40%;
    border: 1px solid #e5e5e5;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
}
.login__description {
    clear: both;
    color: #bfbfbf;
    font-size: 0.75rem;
    line-height: 18px;
    text-align: center;
}
</style>
