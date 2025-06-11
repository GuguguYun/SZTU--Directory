<template>
    <div class="selectDepartment">
        <div class='selectDepartment-title'>
            <span class="selectDepartment-content">部门</span>
            <img :src="logo" alt="#" class="selectDepartment-img"/>
        </div>
        <div class="selectDepartment-option">
            <SelectItems :itemList="AllItemList"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import logo from '@/assets/down.png';
    import SelectItems from './SelectItems.vue';
    import useItemList from '@/hooks/useItemList';

    const {AllItemList} = useItemList();
</script>

<style>
    .selectDepartment {
        /* margin-right: 1px; */
        width: 18%;
        height: 800px;
        background-color: #fff;
        /* border-right: 0.5px solid #1831ba; */
    }


    .selectDepartment-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        border-bottom: 1.5px solid #1831ba;
        border-right: none;
    }

    .selectDepartment-content {
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .selectDepartment-img {
        width: 14px;
        height: 14px;
        margin: 7px 0px 0px 7px;
    }

    .selectDepartment-option {
        width: 100%;
        height: 718.5px;
        overflow-x: auto;
        box-sizing: border-box;
    }
</style>