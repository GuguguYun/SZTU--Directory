<template>
    <div class="dataItems">
        <div class="name-item">
            {{ props.item.name }}
        </div>
        <div class="sno-item">
            {{ props.item.sno }}
        </div>
        <div class="inline-item">
            {{ props.item.inline }}
        </div>
        <div class="outline-item">
            {{ props.item.outline }}
        </div>
        <div class="department-item">
            {{ props.item.department }}
        </div>
        <div class="department-sno-item">
            {{ props.item.department_sno }}
        </div>
        <div class="email-item">
            {{ props.item.email }}
        </div>
        <div class="address-item">
            {{ props.item.address }}
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { type TeacherInter } from '@/types';
    import { type PropType } from 'vue';

    const props = defineProps({
        item: {
            type: Object as PropType<TeacherInter>,
            required: true,
        }
    })
</script>

<style>
    .dataItems {
        display: flex;
        height: 72px;
        width: 100%;
        /* background-color: pink; */
        border-top: 0.5px solid #e2e2e2;
    }

    .name-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .sno-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .inline-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .outline-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .department-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .department-sno-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .email-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }

    .address-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12.5%;
        height: 100%;
        font-size: 15px;
        font-weight: 400;
        color: #3d3d3d;
    }
</style>