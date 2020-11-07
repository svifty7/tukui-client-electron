<template>
    <div class="addons-list">
        <div class="addons-list__head">
            <button class="button"
                    type="button"
            >
                Install ElvUI
            </button>

            <button class="button"
                    type="button"
            >
                Install TukUI
            </button>

            <label class="search">
                <input v-model="search"
                       type="text"
                       class="search__control"
                >
            </label>

            <button class="addons-list__update"
                    type="button"
            />
        </div>

        {{ numberOfElements }}
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class AddonsList extends Vue {
        @Prop() readonly version!: string;

        private addons: object[] = [];

        private isProd: boolean = process.env.NODE_ENV === 'production';

        private urlSite: string = this.isProd
            ? 'https://www.tukui.org'
            : 'http://localhost:8080';

        private urlType: string = this.version === 'retail'
            ? 'addons'
            : 'classic-addons';

        private urlRequest = this.isProd
            ? `${this.urlSite}${this.urlType}=all`
            : `${this.urlSite}/json/addons.json`;

        private search = '';

        mounted(): void {
            this.getAddonsList();
        }

        get computedAddons(): object[] {
            const regExp = new RegExp(this.search, 'gi');

            return this.search ? this.addons.filter((item: any) => item.name.match(regExp)) : this.addons;
        }

        get numberOfElements(): number {
            return this.computedAddons.length
        }

        getAddonsList(): void {
            this.$axios({
                method: 'get',
                url: this.urlRequest,
            })
            .then(res => {
                if (res.status === 200 && res.statusText === 'OK') {
                    this.$set(this, 'addons', res.data)
                }
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
