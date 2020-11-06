<template>
    <div id="app"
         class="app"
    >
        <client-switcher/>
    </div>
</template>

<script>
    import ClientSwitcher from '@/components/ClientSwitcher';

    export default {
        name: 'App',
        components: { ClientSwitcher },
    };
</script>

<style lang="scss">
    @import "~normalize.css/normalize.css";

    * {
        box-sizing: border-box;
        outline: none;
    }

    html, body {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #fff;
        line-height: 20px;
        font: {
            family: 'Exo 2', sans-serif;
            weight: 400;
            size: 16px;
        };
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2c3e50;
        width: 100%;
        min-height: 100%;
    }
</style>
