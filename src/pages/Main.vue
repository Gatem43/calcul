<template>
    <div class="flex1">
        <div class="flex2">
            <p>Вес</p>
            <input class="input-med" type="number" v-model="weight">
        </div>
    </div>
    <div class="flex1">
        <div class="flex2">
            <p>Рост</p>
            <input class="input-med" type="number" v-model="height">
        </div>
    </div>
    <div class="flex1">
        <div class="flex2">
            <p style="line-height: 30px;"> меньше 15 - острый дефицит веса <br>
                от 15 до 20 - дефицит веса <br>
                от 20 до 25 - нормальный вес <br>
                от 25 до 30 - избыточный вес <br>
                больше 30 - ожирение</p>
        </div>
    </div>
    <div class="flex1">
        <div class="flex3">
            <p>
                Индекс массы тела:
            </p>
            <p style="font-size: 18px; font-weight: bold">
                {{ itog }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weight: '',
            height: '',
            itog: '0',
        }
    },

    watch: {
        weight() {
            this.itog = this.weight / (this.height*this.height/10000)
            return this.itog
        },
        height() {
            this.itog = this.weight / (this.height*this.height/10000)
            return this.itog
        },
        itog() {
            if (this.weight == '' || this.height == '') {
                this.itog = '0';
            } else {
                
            }
        }
    }
}
</script>

<style>
    .input-med {
        width: 100%;
        height: 30px;
        border: 2px solid #9ecae8;
        border-radius: 10px
    }
    .flex1 {
        display: flex;
        justify-content: center;
    }

    .flex2 {
        width: 90%;
    }

    .flex3 {
        text-align: end;
        padding: 0px 10px 0px 10px;
        border-radius: 0 0 10px 10px;
        width: 100%;
        background-color: #1f86cc;
    }
</style>