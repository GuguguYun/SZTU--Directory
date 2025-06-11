<template>
    <div class="root-dataItems">
        <div class="root-name-item">
            {{ props.item.name }}
        </div>
        <div class="root-sno-item">
            {{ props.item.sno }}
        </div>
        <div class="root-inline-item">
            {{ props.item.inline }}
        </div>
        <div class="root-outline-item">
            {{ props.item.outline }}
        </div>
        <div class="root-department-item">
            {{ props.item.department }}
        </div>
        <div class="root-department-sno-item">
            {{ props.item.department_sno }}
        </div>
        <div class="root-email-item">
            {{ props.item.email }}
        </div>
        <div class="root-address-item">
            {{ props.item.address }}
        </div>
        <div class="root-del-item">
            <p @click="del">删除</p>
            /
            <p @click="update">修改</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { type TeacherInter } from '@/types';
    import { type PropType } from 'vue';
    import  {useRouter} from 'vue-router';
    import useTeacherList from '@/hooks/useTeacherList';

    const {DeleteTeacherList,updateTeacherItem} = useTeacherList();

    const props = defineProps({
        item: {
            type: Object as PropType<TeacherInter>,
            required: true,
        }
    })

    const del = () => {
        if (confirm('确定要删除吗？')) {
            DeleteTeacherList(props.item.id)
        }
    }

    const router = useRouter();
    const update = () => {
        router.push('/update');
        Object.assign(updateTeacherItem,props.item);
    }
</script>

<style>
    .root-dataItems {
        display: flex;
        height: 72px;
        width: 100%;
        /* background-color: pink; */
        border-top: 0.5px solid #e2e2e2;
    }

    .root-name-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .root-sno-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .root-inline-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .root-outline-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .root-department-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .root-department-sno-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .root-email-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .root-address-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .root-del-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.11%;
        height: 100%;
        font-size: 16px;
        font-weight: 400;
        color: red;
    }
</style>