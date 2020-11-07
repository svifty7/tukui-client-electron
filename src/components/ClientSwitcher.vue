<template>
    <div class="client-switcher">
        <a v-for="(version, index) in versionList"
           :key="index"
           href="#"
           class="client-switcher__item"
           :style="{ backgroundImage: `url('${version.img}')` }"
           @click.left.exact.prevent="emitVersion(version)"
        >
            <div class="client-switcher__item_name">
                {{ version.name }}
            </div>
        </a>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class ClientSwitcher extends Vue {
        private versionList: object[] = [];

        mounted(): void {
            this.$set(this, 'versionList', [{
                id: 'classic',
                name: 'Classic',
                img: '/img/classic.jpg'
            }, {
                id: 'retail',
                name: 'Retail',
                img: '/img/shadowlands.jpg'
            }])
        }

        emitVersion(version: any): void {
            this.$emit('select', version.id)
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/variables";

    .client-switcher {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        &__item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50vw;
            height: 100vh;
            border-radius: 4px;
            overflow: hidden;
            color: $white;
            background: {
                size: cover;
                position: center center;
            };

            &_name {
                @include css_anim($item: background-color);

                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparentize($black, .3);
                line-height: 42px;
                font: {
                    weight: bolder;
                    size: 38px;
                };
                text-shadow: 2px 2px 4px $black;

                &:hover {
                    @include css_anim($item: background-color, $time: .15s);

                    background-color: transparentize($black, .75);
                }
            }
        }
    }
</style>
