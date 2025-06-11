<template>
    <div class="login-content">
        <div class="login-title">编辑通讯录需管理员账号：请登录</div>
        <div class="login-input">
            <span class="login-input-span">
                <p class="login-input-p">账号：</p>
                <input v-model="ac" type="text" class="login-input-input" placeholder="请输入管理员账号">
            </span>
            <span class="login-input-span">
                <p class="login-input-p">密码：</p>
                <input v-model="pw" type="text" class="login-input-input" placeholder="请输入管理员密码">
            </span>
        </div>
        <div class="login-button">
            <button class="login-button-button" @click="handleLog">登录</button>
            <button class="login-button-button" @click="handleCancel">返回</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    import useRoot from '@/hooks/useRoot';

    const {root,who,getRoot,loginNum} = useRoot();

    const ac = ref<string>("");
    const pw = ref<string>("");

    const router = useRouter();
    const handleCancel = () => {
        router.push('/home');
        ac.value = "";
        pw.value = "";
    }
    const handleLog = () => {
        getRoot(ac.value,pw.value);
        // if (who.value) {
        //     router.push('/root');
        // }
        setTimeout(()=>{
            if (who.value) {
                router.push('/root');
            }
        },150);
    }
</script>

<style>
    .login-content{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 500px;
        height: 300px;
        background-color: #fff;
        transform: translate(-50%, -50%);
        box-shadow: 0 4px 24px rgba(0,0,0,0.15); /* 添加阴影 */
    }

    .login-title{
        width: 100%;
        height: 50px;
        color: #fff;
        background-color: #00215b;
        line-height: 50px;
        padding-left: 10px;
        font-size: 18px;

    }

    .login-input{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 200px;
        background-color: #e5e2e2;
    }

    .login-input-span {
        display: flex;
        margin-bottom: 10px;
    }

    .login-input-p {
        font-size: 18px;
    }

    .login-input-input {
        width: 200px;
        outline: none;
    }

    .login-button {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
        height: 50px;
    }

    .login-button-button {
        width: 80px;
        height: 30px;
        margin-right: 15px;
    }
</style>