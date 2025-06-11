import {reactive,computed,ref} from 'vue';
import { type TeacherInter } from '@/types';
import axios from 'axios';

const teacherList = reactive<TeacherInter[]>(
    [
        // 空数组，待请求数据
    ]
)

const updateTeacherItem = reactive<TeacherInter>(
    {
        id:0,
        name:"",
        sno: null,
        inline: null,
        outline: null,
        department_sno: null,
        department: "",
        email: "",
        address: ""
    }
)

const GetAllTeacherList = ():void => {
    const fetchData = async () => {
        try{
            const response = await axios.get('/api/all');
            console.log(response.data);
            // 错误的接收方法 TeacherList = response.data; 
            // 正确方法
            teacherList.length = 0;
            teacherList.push(...response.data);
        }catch(error){
            console.log(error);
        }
    }
    setPageNum(1);
    fetchData();
}

const GetSearchTeacherList = (searchValue: string):void => {
    const fetchData = async () => {
        try{
            const response = await axios.get(`/api/index/${searchValue}`)
            teacherList.length = 0;
            teacherList.push(...response.data);
        }catch(error){
            console.log(error);
        }
    }
    setPageNum(1);
    fetchData();
}

const GetFilterTeacherList = (filterValue: string):void => {
    // 确保有效更新数据
    const Nomsg = ["职能部门","附属教育机构","教学单位","群团组织","其他直属机构","教辅单位"];
    if (Nomsg.some(item => item === filterValue)) {
      return;
    }

    const fetchData = async () => {
        try{
            const response = await axios.get(`/api/filter/${filterValue}`);
            teacherList.length = 0;
            teacherList.push(...response.data);
        }catch(error){
            console.log(error);
        }
    }

    setPageNum(1);
    fetchData();
}

// update api
const UpdateTeacherList = (newData: TeacherInter):void => {
    const fetchData = async() => {
        try{
            const response = await axios.put('/api/update',newData);
            teacherList.length = 0;
            teacherList.push(...response.data);
        }catch(error){
            console.log(error);
        }
    }

    if(newData){
        fetchData();
    }else{
        return;
    }
}

// add api
const AddTeacherList = (newData: TeacherInter): void => {
    const fetchData = async() => {
        try{
            const response = await axios.post('/api/add',newData);
            teacherList.length = 0;
            teacherList.push(...response.data);
        }catch(error){
            console.log(error);
        }
    }

    if(newData){
        fetchData();
    }else{
        return;
    }
}

// delete api 
const DeleteTeacherList = (targetId: number): void => {
    const fetchData = async() => {
        try{
            const response = await axios.delete(`/api/delete/${targetId}`);
            teacherList.length = 0;
            teacherList.push(...response.data);
        }catch(error){
            console.log(error);
        }
    }

    fetchData();
}

// 定义展示页数
const pageNum = ref(1);

const setPageNum = (newPage: number):void => {
  pageNum.value = newPage;
}

const allPageNum = computed(() => {
    return Math.ceil(teacherList.length /10);
})

const showTeacherList = computed<TeacherInter[]>(() => {
    if (!Array.isArray(teacherList)){
        return [];
    }

    // 分页逻辑
    const startIndex = (pageNum.value - 1) * 10;
    const endIndex = startIndex + 10;
    
    // 返回当前页的数据
    return teacherList.slice(startIndex, endIndex);
})

export default function useTeaacherList() {
    return  {
        teacherList,
        // pageNum 需要value读取值
        pageNum,
        allPageNum,
        showTeacherList,
        updateTeacherItem,
        GetAllTeacherList,
        GetSearchTeacherList,
        GetFilterTeacherList,
        UpdateTeacherList,
        AddTeacherList,
        DeleteTeacherList,
        setPageNum,
    }
}