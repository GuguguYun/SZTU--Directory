<template>
    <div class="footer">
        <div class="footer-select">
            <div class='up-back-jump'>
                <div class="footer-back" @click="handleBack">
                  <img :src="logo" alt="" />
                </div>
                <div
                    v-for="page in pageList"
                    :key="page"
                    :class="['footer-page', { active: page === pageNum }]"
                    @click="setPageNum(page)"
                >
                {{ page }}
                </div>
                <div class="footer-up" @click="handleUp">
                  <img :src="logo" alt="" />
                </div>
            </div>
            <p class='howManyPages'>
                {{ pageNum }}/{{ allPageNum }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import logo from '@/assets/down_small.png';
    import useTeacherList from '@/hooks/useTeacherList';
    import {computed} from 'vue';

    const {pageNum,allPageNum,setPageNum} = useTeacherList();

    const handleBack = ():void => {
        if(pageNum.value > 1){
            setPageNum(pageNum.value - 1);
        }
    }

    const handleUp = ():void => {
        if(pageNum.value < allPageNum.value){
            setPageNum(pageNum.value + 1);
        }
    }

    const pageList = computed(() => {
        let pageList = [];

        if (allPageNum.value >=10 && pageNum.value >=5 && pageNum.value <= allPageNum.value-4){
            for(let i = pageNum.value-4;i<=pageNum.value+5;i++){
                pageList.push(i);
            }
        }else if(allPageNum.value >= 10 && pageNum.value < 5){
            for(let i=1; i<=10; i++){
                pageList.push(i);
            }
        }else if(allPageNum.value >= 10 && pageNum.value > allPageNum.value-4){
            for(let i=allPageNum.value-9;i<=allPageNum.value;i++){
                pageList.push(i);
            }
        }else{
            for(let i=1;i<=allPageNum.value;i++){
                pageList.push(i);
            }
        }

        return pageList;
    })
</script>

<style>
    .footer {
        display: flex;
        justify-content: end;
        height: 80px;
        width: 100%;
        /* background-color: pink; */
    }

    .footer-select {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 30%;
        width: 35%;
        height: 100%;
        background-color: #fff;
        flex-direction: column;
    }

    .up-back-jump {
        display: flex;
        width: 65%;
        height: 40px;
        justify-content: center;
    }

    .footer-back {
        text-align: center;
        line-height: 22px;
        width: 22px;
        height: 22px;
        background-color: #e5e2e2;
    }

    .footer-back img {
        width: 14px;
        height: 14px;
        transform: rotate(90deg);
    }

    .footer-up {
        text-align: center;
        line-height: 22px;
        width: 22px;
        height: 22px;
        background-color: #e5e2e2;
    }

    .footer-up img {
        width: 14px;
        height: 14px;
        transform: rotate(-90deg);
    }

    .footer-page {
        width: 22px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        background-color: #f7f4f4;
    }

    .footer-page.active {
        background-color: #3832e7aa;
    }

    .footer-page:hover{
        background-color: #110f4e56;
        color: white;
        cursor: pointer;
    }

    .howManyPages {
        /* background-color: #e5e2e2; */
        color: #706f6f;
    }
</style>