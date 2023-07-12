<template>
    <footer>
        <div class="ds-main-content-container">
            <div class="footer__wrapper">
                <FooterColumn variant="column_large">
                    <span class="ds-text-4 bold">{{ $t('footer.subscribe_to_news') }}</span>
                    <div class="footer__watermark-container">
                        <Age class="footer__age" />
                        <div class="footer__delimiter" />
                        <span class="footer__watermark ds-text-7">{{ $t('footer.watermark') }}</span>
                    </div>
                </FooterColumn>
                <FooterColumn variant="column_medium">
                    <FooterSection title="форум">
                        <ForumLink />
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection :title="$t('footer.shop')">
                        <a href="#" class="ds-text-6"> {{ $t('footer.promotions_and_bonuses') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.warranty') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.shipping_and_payment') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.where_is_order') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.all_seeds') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.price_list') }} </a>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection :title="$t('footer.information')">
                        <a href="#" class="ds-text-6"> {{ $t('footer.news') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.articles') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.help') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.terminology') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.anonymity') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.affiliate_program_rules') }} </a>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection :title="$t('footer.company')">
                        <a href="#" class="ds-text-6"> {{ $t('footer.about_us') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.store_reviews') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.partnership') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.sitemap') }} </a>
                        <a href="#" class="ds-text-6"> {{ $t('footer.contacts') }} </a>
                    </FooterSection>
                </FooterColumn>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { Age } from 'shared/images/icons';
import { FooterSection, FooterColumn } from './components';
import ForumLink from 'widgets/footer/components/forum-link.vue';

@Component({
    components: {
        ForumLink,
        FooterSection,
        FooterColumn,
        Age,
    },
})
export default class Footer extends Vue {}
</script>

<style lang="scss">
$footer-side-padding: 15px;

footer {
    background-color: $ds-color-background;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: $footer-min-height;
}

.footer__wrapper {
    width: 100%;
    max-width: 1410px;
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.footer__watermark-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.footer__watermark {
    color: $ds-color-neutral;
}

.footer__delimiter {
    width: 1px;
    height: 100%;
    background-color: $ds-color-neutral;
}

.footer__age {
    width: 24px;
    height: 24px;
    fill: $ds-color-neutral;
    flex-shrink: 0;
}
</style>
