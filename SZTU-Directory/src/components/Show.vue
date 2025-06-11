<template>
    <div class="show">
        <SelectDepartment/>
        <ShowData/>
    </div>
</template>

<script lang="ts" setup>
    import SelectDepartment from './SelectDepartment.vue';
    import ShowData from './ShowData.vue';
</script>

<style>
    .show {
        display: flex;
        width: 100%;
        height: 800px;
    }
</style>