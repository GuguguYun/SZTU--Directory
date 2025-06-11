<template>
    <div class="root-showData">
        <div class="root-showData-title">
            <div class="root-name-title">姓名</div>
            <div class="root-sno-title">工号</div>
            <div class="root-inline-title">内线电话</div>
            <div class="root-outline-title">外线电话</div>
            <div class="root-department-title">部门</div>
            <div class="root-department-sno-title">部门编号</div>
            <div class="root-email-title">邮箱</div>
            <div class="root-address-title">办公地址</div>
            <div class="root-del-title">删除</div>
        </div>
        <div class="showData-content">
            <Root_DataItems v-for="item in showTeacherList" :key="item.id" :item="item"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import Root_DataItems from '@/root_components/Root_DataItems.vue';
    import useTeacherList from '@/hooks/useTeacherList';

    const {showTeacherList,GetAllTeacherList} = useTeacherList();

    onMounted(() => {
        GetAllTeacherList();
    })
</script>

<style>
    .root-showData {
        width: 82%;
        height: 800px;
        background-color: #fff;
        /* border-left: 0.4px solid #1831ba; */
    }

    .root-showData-title {
        display: flex;
        width: 100%;
        height: 80px;
        border-bottom: 1.5px solid #1831ba;
    }

    .root-name-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-sno-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-inline-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-outline-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-department-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-department-sno-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-email-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-address-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.1%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-del-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.1%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .root-showData-content {
        width: 100%;
        height: 720px;
    }
</style>