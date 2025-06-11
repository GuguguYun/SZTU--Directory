import {reactive,ref,computed} from 'vue';
import {type Root} from  '@/types';
import axios from 'axios';

const root = reactive<Root>(
    {
        account: "",
        password: "",
        status: 65,
    }
)

// 计算属性.value
const who = computed<boolean>(()=>{
    return root.status === 12;
})

const loginNum = ref<number>(1);

const getRoot = (username: string,password: string):void => {
    const fetchRoot = async() => {
        try{
            const response = await axios.get(`/api/login/${username}/${password}`);
            root.status = response.data;
            if (who.value) {
                loginNum.value = 0;
            }else {
                loginNum.value += 1;
            }
            root.account = username;
            root.password = password;
        }catch(error){
            console.log(error);
            root.status = 777;
            root.account = username;
            root.password = password;
        }
    }

    if(loginNum.value > 5){
        alert("登录失败五次，禁止登录");
        return;
    }

    console.log(loginNum.value);
    

    fetchRoot();
}

export default function useRoot() {
    return{
        loginNum,
        root,
        who,
        getRoot
    }
}