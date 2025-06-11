<template>
    <div class="show">
        <SelectDepartment/>
        <Root_ShowData/>
    </div>
</template>

<script lang="ts" setup>
    import SelectDepartment from '@/components/SelectDepartment.vue';
    import Root_ShowData from '@/root_components/Root_ShowData.vue';
</script>

<style>
    .show {
        display: flex;
        width: 100%;
        height: 800px;
    }
</style>