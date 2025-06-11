<template>
    <ul>
      <li v-for="item in props.itemList" :key="item.id" :class="['Tree-li', item.status ? 'true' : 'false']">
        <div class="Tree-content" @click="handleClick(item)">
            <img v-if="item.children" :src="logo" alt="#" :class="['Tree-img', item.open]">
            <span>{{ item.name }}</span>
        </div>
        <SelectItems 
            v-if="Array.isArray(item.children) 
            && item.children.length > 0 
            && item.open === 'open'" 
            :itemList="item.children" />
      </li>
    </ul>
</template>

<script lang="ts" setup>
    import logo from '@/assets/down_small.png';
    import { type TreeNode} from '@/types';
    import useItemList from '@/hooks/useItemList';
    import useTeacherList from '@/hooks/useTeacherList';
    import {type PropType} from 'vue';

    // 解构赋值
    const {updateNodeOpenStatus, updateNodeSonStatus} = useItemList();
    const {GetFilterTeacherList} = useTeacherList();

    // 解构props.itemList
    const props = defineProps({
        itemList: {
            type: Array as PropType<TreeNode[]>,
            required: true,
        }
    })

    const handleClick = (e: TreeNode) => {
        updateNodeSonStatus(props.itemList,e.id);
        setTimeout(() => {
            updateNodeOpenStatus(props.itemList,e.id);
        },150);

        // 处理数据搜索的逻辑
        // 递归收集所有选中状态的关键字
        let keywords:string = e.name;
        const getKeyWords = (item: TreeNode) => {
            if (Array.isArray(item.children)) {
                item.children.forEach(child => {
                    // 只收集状态为true的子节点
                    if (child.name) {
                        // 添加到关键字字符串，用逗号分隔
                        keywords += "," + child.name;
                        // 递归处理该子节点的子节点
                        if (child.children) {
                            getKeyWords(child);
                        }
                    }
                })
            }
        };
        getKeyWords(e);
        GetFilterTeacherList(keywords);
    }
</script>

<style scoped>
    @keyframes slideUp {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-5px);
            opacity: 0;
        }
    }

    @keyframes slideDown {
        from {
            transform: translateY(-15px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .Tree-li {
        list-style: none;
        margin-top: 6px;
        margin-left: 7px;
    }

    .Tree-li.true {
        animation: slideDown 0.2s ease forwards;
    }

    .Tree-li.false {
        animation: slideUp 0.2s ease forwards;
    }

    .Tree-content {
        display: flex;
        align-items: center;
        color: #7f7f7f;
        font-size: 15px;
    }

    .Tree-img {
        margin-right: 3px;
        width: 12px;
        height: 12px;
        transform: rotate(270deg);
        transition: transform 0.2s ease;
    }

    .Tree-img.closed {
    transform: rotate(270deg);
    }

    .Tree-img.open {
        transform: rotate(360deg);
    }
</style>