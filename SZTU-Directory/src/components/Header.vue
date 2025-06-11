<template>
    <div class="header">
        <div class="header-content">
            <img :src="logo" alt="深圳技术大学" />
            <div class="smallbox">
                <h2>深圳技术大学</h2>
                <p>SHENZHEN TECHNOLOGY UNIVERSITY</p>
            </div>
            <div class="divider">
            </div>
            <p class="what">内部通讯录</p>
        </div>
        <img v-if="who" :src="add" alt="#" class="header-add" @click="toAdd">
        <img v-if="!who" :src="login" alt="登录" class="header-add" @click="toLogin">
    </div>
</template>

<script lang="ts" setup>
//     export default {
//         name:"Header",
        // setup中的this是undefined,vue3弱化this
        // setup执行时机在beforeCreate早
        // setup的返回值可以是一个渲染函数
        // data和methods可以同时存在并且可以通过this读取setup的数据，但是setup反之
        // setup语法糖可简化配置setup的return
        // npm i vite-plugin-vue-setup-extend -D
        // setup里面的ref响应式数据需要.value，模板里面不需要
        // reactive创建响应式对象数据需要引入(数组也是对象)
        // ref也可定义响应式对象，但是底层是依靠reactive
        // reactive重新分配对象时会失去响应式，需要Object.assign()
        // 为什么动了.value就是响应式，直接全部更改proxy就不是？？
        // toRefs可以让解构赋值变成响应式数据(toRef)
//     }
    import logo from '../assets/sztuLog.png';
    import login from '@/assets/login.png';
    import add from '@/assets/add.png';
    import {useRouter,useRoute} from 'vue-router';
    import useRoot from '@/hooks/useRoot';

    const {who} = useRoot();

    const router = useRouter();
    const route = useRoute();
    const toLogin = () => {
        console.log(who.value);
        if(route.path != '/root'){
            router.push('/root');
        }
    }
    const toAdd = () => {
        if(route.path != '/add'){
            router.push('/add');
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70px;
        background-color: #00215b;
    }

    .header-add {
        width: 40px;
        height: 40px;
        margin-right: 1%;
    }

    .header-content {
        height: 70px;
        display: flex;
        align-items: center;
        margin-left: 5%;
    }

    .header .header-content img {
        height: 50px;
        width: 50px;
    }

    .smallbox {
        display: block;
        margin-left: 10px;
        color: #fff;
        unicode-bidi: isolate;
    }

    .smallbox h2 {
        margin-top: 10px;
        line-height: 30px;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 4px;
    }

    .smallbox p {
        line-height: 30px;
        font-size: 12px;
    }

    .header-content .divider {
        display: inline-block;
        width: 3px;
        height: 35px;
        margin-left: 15px;
        margin-right: 15px;
        background-color: #dcdfe6;
        /* 让行内元素在其父元素基线中线 */
        vertical-align: middle;
    }

    .header-content .what {
        color: #fff;
        font-size: 24px;
    }
</style>