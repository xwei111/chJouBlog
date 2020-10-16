<template>
    <div class="filter_blur">
        <div class="filter_control">
            <p class="filter_control_title">{{title}}</p>
            <el-slider class="filter_control_silder" v-model="dfVl" @input="onInput" :min="min" :max="max"></el-slider>
        </div>
        <div class="filter_blur_ig">
            <div>
                <img :src="require('./start.jpg')" />
            </div>
            <div>
                <img ref="targetImg" :src="require('./start.jpg')" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        unit: {
            type: String,
            default: '%'
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        defaultValue: {
            type: Number,
            default: 0
        },
        kind: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            dfVl: this.defaultValue
        }
    },
    methods: {
        onInput(val) {
            this.$refs['targetImg'].style.filter = `${this.kind}(${val}${this.unit})`
        }
    }
}
</script>
<style scoped>
.filter_blur {
    width: 100%;
}
.filter_control {
    width: 100%;
    display: flex;
    align-content: center;
}
.filter_control_title {
    margin: 0;
    margin-right: 20px;
    display: flex;
    align-items: center;
}
.filter_control_silder {
    width: 40%;
}
.filter_blur_ig {
    width: 100%;
    display: flex;
}
/* .filter_blur_ig img {
    width: 50%;
} */
</style>