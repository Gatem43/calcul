<template>
    <div class="flex1">
        <div class="flex2">
            <p>Емкость аккумалятора (MaH)</p>
            <input class="input-med" type="number" v-model="MaH">
        </div>
    </div>
    <div class="flex1">
        <div class="flex2">
            <p>Зарядный ток (Ma)</p>
            <input class="input-med" type="number" v-model="Ma">
        </div>
    </div>
    <div style="margin-top: 30px;" class="flex1">
        <div class="flex3">
            <p>
                Время зарядки аккумулятора:
            </p>
            <p style="font-size: 18px; font-weight: bold">
                {{ itog2 }} Ч.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            MaH: '',
            Ma: '',
            itog2: '0',
        }
    },

    watch: {
        MaH() {
            this.itog2 = this.MaH / this.Ma
            return this.itog2
        },
        Ma() {
            this.itog2 = this.MaH / this.Ma
            return this.itog2
        },
        itog2() {
            if (this.MaH == '' || this.Ma == '') {
                this.itog2 = '0';
            } else {
                
            }
        }
    }
}
</script>

<style>

</style>