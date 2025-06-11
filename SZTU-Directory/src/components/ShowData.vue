<template>
    <div class="showData">
        <div class="showData-title">
            <div class="name-title">姓名</div>
            <div class="sno-title">工号</div>
            <div class="inline-title">内线电话</div>
            <div class="outline-title">外线电话</div>
            <div class="department-title">部门</div>
            <div class="department-sno-title">部门编号</div>
            <div class="email-title">邮箱</div>
            <div class="address-title">办公地址</div>
        </div>
        <div class="showData-content">
            <DataItems v-for="item in showTeacherList" :key="item.id" :item="item"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import DataItems from './DataItems.vue';
    import useTeacherList from '@/hooks/useTeacherList';

    const {showTeacherList,GetAllTeacherList} = useTeacherList();

    onMounted(() => {
        GetAllTeacherList();
    })
</script>

<style>
    .showData {
        width: 82%;
        height: 800px;
        background-color: #fff;
        /* border-left: 0.4px solid #1831ba; */
    }

    .showData-title {
        display: flex;
        width: 100%;
        height: 80px;
        border-bottom: 1.5px solid #1831ba;
    }

    .name-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .sno-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .inline-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .outline-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .department-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .department-sno-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .email-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .address-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        /* border-left: 0.7px solid #1831ba; */
        color: #00215b;
        font-size: 18px;
        font-weight: 700;
    }

    .showData-content {
        width: 100%;
        height: 720px;
    }
</style>