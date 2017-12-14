<template>
    <div class="demo-wrapper">
        <select-el v-model="selectValue" :options="selectList" width="240px" @selectchange="changeHandler">
            <div slot="label">Select : </div>
        </select-el>
        <br />
        <select-el v-model="selectValue2" :options="selectList2" width="240px" @selectchange="changeHandler">
            <div slot="label">Select : </div>
        </select-el>

        <br />

        <div class="markdown-body demo-md" v-html="Md" ref='md'></div>
    </div>
</template>

<style lang="less">
.demo-wrapper {
    width: 800px;
    height: 600px;
}
</style>


<script>
import SelectEl from 'pcadmin-select';
import Md from 'pcadmin-select/README.md';

export default {
    data() {
        return {
            Md,
            selectValue: '',
            selectList: [
                {
                    label: '选项一',
                    value: '13'
                },
                {
                    label: '选项二',
                    value: '15'
                },
                {
                    label: '选项三',
                    value: '24'
                },
                {
                    label: '选项四',
                    value: '31'
                },
                {
                    label: '选项一',
                    value: '0'
                },
                {
                    label: '选项二',
                    value: '1'
                },
                {
                    label: '选项三',
                    value: '2'
                },
                {
                    label: '选项四',
                    value: '3'
                },
                {
                    label: '选项一',
                    value: '5'
                },
                {
                    label: '选项二',
                    value: '6'
                },
                {
                    label: '选项三',
                    value: '7'
                },
                {
                    label: '选项四',
                    value: '8'
                },
                {
                    label: '选项一',
                    value: '9'
                },
                {
                    label: '选项二',
                    value: '10'
                },
                {
                    label: '选项三',
                    value: '11'
                },
                {
                    label: '选项四',
                    value: '12'
                }
            ],
            selectValue2: '',
            selectList2: [
                {
                    label: '选项一',
                    value: '13'
                },
                {
                    label: '选项二',
                    value: '15'
                },
                {
                    label: '选项三',
                    value: '24'
                },
                {
                    label: '选项四',
                    value: '31'
                },
                {
                    label: '选项一',
                    value: '0'
                },
                {
                    label: '选项二',
                    value: '1'
                },
                {
                    label: '选项三',
                    value: '2'
                },
                {
                    label: '选项四',
                    value: '3'
                },
                {
                    label: '选项一',
                    value: '5'
                },
                {
                    label: '选项二',
                    value: '6'
                },
                {
                    label: '选项三',
                    value: '7'
                },
                {
                    label: '选项四',
                    value: '8'
                },
                {
                    label: '选项一',
                    value: '9'
                },
                {
                    label: '选项二',
                    value: '10'
                },
                {
                    label: '选项三',
                    value: '11'
                },
                {
                    label: '选项四',
                    value: '12'
                }
            ]
        };
    },
    mounted() {},
    methods: {
        changeHandler(val) {
            console.log(val);
        }
    },
    components: {
        SelectEl
    }
};
</script>

