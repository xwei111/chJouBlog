<template>
<div>
    <p>一键置灰:</p>
    <el-switch v-model="vl"></el-switch>
    <p>以下demo在移动端体验更好</p>
    <p>暗黑模式:</p>
    <el-switch v-model="isBlack"></el-switch>
    <p>blingbling模式:</p>
    <el-switch v-model="isBuling"></el-switch>
</div>
  
</template>
<script>
export default {
    data() {
        return {
            vl: false,
            isBlack: false,
            isBuling: false
        }
    },
    watch: {
        vl(newVl) {
            const el = document.getElementsByClassName('vuepress-blog-theme-content')[0];
            this.setFilter(el, newVl, `grayscale(1)`)
        },
        isBlack(newVl) {
            const el = document.documentElement;
            const foo = document.getElementsByClassName('footer')[0];
            this.setFilter(el, newVl, `invert(1)`)
            this.setFilter(foo, newVl, `invert(1)`)
            this.setImg(newVl)
        },
        isBuling(newVl) {
            const el = document.getElementsByClassName('vuepress-blog-theme-content')[0];
            el.style['animation'] = newVl ? `hue 3s infinite linear` : '';
        }
    },
    methods: {
        setFilter(el, newVl, attr) {
            el.style['filter'] = newVl ? attr : ''
            el.style['-webkit-filter'] = newVl ? attr : ''
            el.style['-moz-filter'] = newVl ? attr : ''
            el.style['-ms-filter'] = newVl ? attr : ''
            el.style['-o-filter'] = newVl ? attr : ''
        },
        setImg(newVl) {
            const head = document.getElementsByTagName('head')[0];
            if(newVl) {
                var style = document.createElement("style");
                style.type = "text/css";
                style.innerHTML = "img{filter: invert(1);}"
                style.id = "stly"
                head.appendChild(style);
            } else {
                head.removeChild(document.getElementById('stly'))
            }
            
        }
    }
}
</script>