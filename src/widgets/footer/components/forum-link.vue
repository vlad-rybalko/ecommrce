<template>
    <div :class="$style.container">
        <Messages :class="$style.icon" />
        <a :href="forumLink" class="ds-text-6">{{ forumLink }}</a>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { Messages } from 'shared/images/icons';
import { FORUM } from 'shared/config';

@Component({
    components: { Messages },
})
export default class SocialsLinks extends Vue {
    forumLink = FORUM;
}
</script>

<style lang="scss" module>
.container {
    display: flex;
    gap: 10px;
}
.icon {
    height: 24px;
    width: 24px;
    fill: $ds-color-neutral;
}
</style>
