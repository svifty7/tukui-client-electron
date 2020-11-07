<template>
    <div id="app"
         class="app"
    >
        <transition name="fade"
                    mode="out-in"
        >
            <client-switcher v-if="!version"
                             key="switcher"
                             @select="version = $event"
            />

            <addons-list v-else
                         key="list"
                         :version="version"
            />
        </transition>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import AddonsList from '@/components/AddonsList.vue';
    import ClientSwitcher from '@/components/ClientSwitcher.vue';

    @Component({
        components: {
            ClientSwitcher,
            AddonsList
        },
    })
    export default class App extends Vue {
        private version = '';
    }
</script>

<style lang="scss">
    @import "~normalize.css/normalize.css";
    @import "~@/assets/styles/variables.scss";

    * {
        box-sizing: border-box;
        outline: none;
        user-select: none;
        appearance: none;
    }

    a {
        @include css_anim($item: color);

        text-decoration: none;
        color: $black;

        &:hover {
            @include css_anim($item: color);

            color: $green;
        }
    }

    html, body {
        display: block;
        width: 100%;
        height: 100%;
        background-color: $white;
        line-height: 20px;
        font: {
            family: 'Exo 2', sans-serif;
            weight: 400;
            size: 16px;
        };
    }

    .app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $black;
        width: 100%;
        min-height: 100%;
    }
</style>
