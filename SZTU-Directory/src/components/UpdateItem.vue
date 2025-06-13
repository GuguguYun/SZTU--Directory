<template>
    <div class="update-content">
        <div class="update-new-content">
            <div class="add-content-title">
            填写需要更新的信息
            </div>
            <div class="add-content-content">
                <span class="add-box">
                    <p class="add-box-p">姓名：</p>
                    <input type="text" class="add-box-input" v-model="newTeacherItem.name">
                </span>
                <span class="add-box">
                    <p class="add-box-p">工号：</p>
                    <input type="text" class="add-box-input" v-model="newTeacherItem.sno">
                </span>
                <span class="add-box">
                    <p class="add-box-p">内线电话：</p>
                    <input type="text" class="add-box-input" v-model="newTeacherItem.inline">
                </span>
                <span class="add-box">
                    <p class="add-box-p">外线电话：</p>
                    <input type="text" class="add-box-input" v-model="newTeacherItem.outline">
                </span>
                <span class="add-box">
                    <p class="add-box-p">部门：</p>
                    <input type="text" class="add-box-input" v-model="newTeacherItem.department">
                </span>
                <span class="add-box">
                    <p class="add-box-p">部门编号：</p>
                    <input type="text" class="add-box-input" v-model="newTeacherItem.department_sno">
                </span>
                <span class="add-box">
                    <p class="add-box-p">邮箱：</p>
                    <input type="text" class="add-box-input" v-model="newTeacherItem.email">
                </span>
                <span class="add-box">
                    <p class="add-box-p">办公地址：</p>
                    <input type="text" class="add-box-input" v-model="newTeacherItem.address">
                </span>
            </div>
            <div class="add-footer">
                <button class="add-footer-button" @click="handleUpdateTeacherList">更新</button>
                <button class="add-footer-button" @click="handleCancelUpdate">取消</button>
            </div>
        </div>
        <div class="update-old-content">
            <div class="add-content-title">
            员工信息
            </div>
            <div class="update-content-content">
                <span class="add-box">
                    <p class="add-box-p">姓名：</p>
                    <input type="text" class="update-box-input" disabled v-model="updateTeacherItem.name"> 
                </span>
                <span class="add-box">
                    <p class="add-box-p">工号：</p>
                    <input type="text" class="update-box-input" disabled v-model="updateTeacherItem.sno">
                </span>
                <span class="add-box">
                    <p class="add-box-p">内线电话：</p>
                    <input type="text" class="update-box-input" disabled v-model="updateTeacherItem.inline">
                </span>
                <span class="add-box">
                    <p class="add-box-p">外线电话：</p>
                    <input type="text" class="update-box-input" disabled v-model="updateTeacherItem.outline"> 
                </span>
                <span class="add-box">
                    <p class="add-box-p">部门：</p>
                    <input type="text" class="update-box-input" disabled v-model="updateTeacherItem.department">
                </span>
                <span class="add-box">
                    <p class="add-box-p">部门编号：</p>
                    <input type="text" class="update-box-input" disabled v-model="updateTeacherItem.department_sno">
                </span>
                <span class="add-box">
                    <p class="add-box-p">邮箱：</p>
                    <input type="text" class="update-box-input" disabled v-model="updateTeacherItem.email">
                </span>
                <span class="add-box">
                    <p class="add-box-p">办公地址：</p>
                    <input type="text" class="update-box-input" disabled v-model="updateTeacherItem.address">
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import useTeaacherList from '@/hooks/useTeacherList';
    import { type TeacherInter } from '@/types';
    import {reactive} from 'vue';
    import {useRouter} from 'vue-router';

    const router = useRouter();
    const {updateTeacherItem,UpdateTeacherList} = useTeaacherList();

    const newTeacherItem = reactive<TeacherInter>({
        id: updateTeacherItem.id,
        name: updateTeacherItem.name,
        sno: updateTeacherItem.sno,
        inline: updateTeacherItem.inline,
        outline:  updateTeacherItem.outline,
        department_sno: updateTeacherItem.department_sno,
        department: updateTeacherItem.department,
        email: updateTeacherItem.email,
        address: updateTeacherItem.address,
    }) 

    const handleUpdateTeacherList = () => {
        if(newTeacherItem.name != "" && newTeacherItem.sno != null){
            UpdateTeacherList(newTeacherItem);
            console.log(newTeacherItem.sno);
            router.push('/root');
        }
        else{
            alert("至少需要填写姓名和工号");
        }
    }

    const handleCancelUpdate = () => {
        router.push('/root');
    }

</script>

<style scoped>
    .update-content {
        position: absolute;
        left: 50%;
        top: 50%;
        /* margin: 0 auto; */
        /* margin-top: 200px; */
        width: 1300px;
        height: 700px;
        background-color: #fff;
        transform: translate(-50%, -50%);
        /* box-shadow: 0 4px 24px rgba(0,0,0,0.15); 添加阴影 */
        display: flex;
        justify-content: space-around;
    }
    
    .update-content-content {
        padding-top: 30px;
        padding-left: 100px;
        padding-right: 100px;
        background-color: #e5e2e2;
    }

    .update-box-input {
        flex: 1;
        height: 25px;
        border: none;
        background-color: #e5e2e2;
        outline: none;
    }

    .add-content{
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
        /* padding-top: 100px; */
        position: absolute;
        left: 50%;
        top: 50%;
        width: 600px;
        height: 700px;
        background-color: #e5e2e2;
        transform: translate(-50%, -50%);
        box-shadow: 0 4px 24px rgba(0,0,0,0.15); /* 添加阴影 */
    }

    .add-content-title {
        padding-left: 20px;
        width: 100%;
        font-size: 28px;
        font-weight: 700;
        height: 100px;
        color: #fff;
        line-height: 100px;
        background-color: #00215b;
    }

    .add-content-content {
        padding-top: 30px;
        padding-left: 100px;
        padding-right: 100px;
    }

    .add-box {
        margin-top: 10px;
        padding-bottom: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #c9c6c6;
    }

    .add-box-p {
        color: #5e5d5d;
        box-sizing: border-box;
        height: 25px;
    }

    .add-box-input {
        flex: 1;
        height: 25px;
        border: none;
        background-color: #fff;
        outline: none;
    }

    .add-footer {
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        height: 80px;
        padding-right: 80px;
    }

    .add-footer-button {
        width: 80px;
        height: 30px;
        background-color: #00215b;
        border: none;
        margin-right: 15px;
        color: #fff;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    }

    .add-footer-button:active {
        transform: scale(0.96); /* 按下时缩小 */
        box-shadow: 0 2px 8px rgba(0,0,0,0.18); /* 阴影变小 */
        background-color: #00123a; /* 可选：颜色变深 */
    }
</style>