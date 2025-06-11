<template>
    <div class="searchbox-bg">
        <div class="searchbox">
            <input 
                type="text"  
                class="search-input"
                placeholder='请输入姓名、工号、部门、电话搜索'
                v-model="inputValue"
                @keydown.enter="handleSearch"
            />
            <button class="searchButton" @click="handleSearch">
                <img :src="logo" alt="搜索" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import logo from '@/assets/search.png';
    import useTeacherList from '@/hooks/useTeacherList';
    import {ref} from 'vue';

    const {GetSearchTeacherList} = useTeacherList();

    const inputValue = ref<string>("");

    const handleSearch = ():void => {
        GetSearchTeacherList(inputValue.value);

        inputValue.value = "";
    }


</script>

<style scoped>
    .searchbox-bg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 230px;
        background-color: #1d2e6e;
    }

    .searchbox {
        display: flex;
        width: 600px;
        height: 50px;
    }

    .searchbox .search-input {
        height: 50px;
        width: 530px;
        border-radius: 50px 0 0 50px;
        border: none;
        line-height: 50px;
        background-color: #fff;
        padding-left: 20px;
        font-size: 18px;
        outline: none;
    }

    .searchButton {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        border-radius: 0 50px 50px 0;
        border: none;
        background-color: #fff;
    }

    .searchButton img{
        width: 30px;
        height: 30px;
    }
</style>