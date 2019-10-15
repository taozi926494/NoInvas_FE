<template>
    <div class="detailInfo">
        <div class="title">
            <strong>{{ data.name }}</strong>
            <i class="el-icon-document"></i>
            <span class="time">更新时间: {{ data.time }}</span>
        </div>
        <div class="status">
            <el-tag color="green" style="color:white;" size="small">{{ data.status[0] }}</el-tag>
            <el-tag color="deepskyblue" style="color:white" size="small">{{ data.status[1] }}</el-tag>
            <el-tag color="lightsalmon" style="color:maroon" size="small">{{ data.status[2] }}</el-tag>  
        </div>
        <div class="describe">
            <el-row class="row">
                <label>请求方式：
                    <span>{{ data.requestType }}</span>
                </label>
                <label>提交方式：
                    <span>{{ data.submitType }}</span>
                </label>
                <label>接口状态：
                    <span>{{ data.interfaceStatus }}</span>
                </label>
            </el-row>
            <el-row class="row">
                <label>接口地址：
                    <span>{{ data.address }}</span>
                </label>
            </el-row>
            <el-row class="row">
                <label>数据类型：
                   <span>{{ data.dataType }}</span>
                </label>
                <label>响应类型： 
                    <span>{{ data.responseType }}</span>
                </label>
            </el-row>
            <el-row class="row">
                <label>接口描述：
                    {{ data.interfaceDescribe }}
                </label>
            </el-row>
        </div>

        <div class="parameters">
            <strong>请求参数</strong>
            <div >
                <el-table
                    border
                    :data="data.requestParams"
                    :header-cell-style="setTableHeaderColor"
                    class="table">
                    <el-table-column
                        prop="name"
                        label="参数名称"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="required"
                        label="是否必须"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        width="150"
                        label="数据类型">
                    </el-table-column>
                    <el-table-column
                        prop="default"
                        width="200"
                        label="默认值">
                    </el-table-column>
                    <el-table-column
                        prop="describe"
                        label="描述">
                    </el-table-column>
                    <el-table-column
                        prop="referenceinterface"
                        label="引用接口">
                    </el-table-column>
                </el-table>
            </div>

        </div>

        
        <div class="parameters">
            <strong>响应数据</strong>
            <div>
                <el-table
                    border
                    :data="data.responseParams"
                    :header-cell-style="setTableHeaderColor"
                    class="table">
                    <el-table-column
                        prop="name"
                        label="参数名称"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="required"
                        label="是否必须"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        width="150"
                        label="数据类型">
                    </el-table-column>
                    <el-table-column
                        prop="describe"
                        label="描述">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <div class="parameters">
            <strong>响应返回示例</strong>
            <a href="http://127.0.0.1:5000/execute?sys=henankejixinxiguanli&api=kejijihuaguanlizhiduchaxun&page=1" target="_blank">数据示例</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data:{
                name: "科技计划管理制度查询",
                time: "2019-10-15 15:22:22",
                status: ["已发布", "查询", "登录验证"],
                requestType: "GET",
                submitType: "GET参数",
                interfaceStatus: "已发布",
                address: "/execute?sys=henankejixinxiguanli&api=kejijihuaguanlizhiduchaxun",
                dataType: "JSON",
                responseType: "JSON",
                interfaceDescribe:"分页查询科技计划管理制度查询",
                requestParams:[
                    {
                        name: "page",
                        required: "true",
                        type: "string",
                        default: "",
                        describe: "页码",
                        referenceinterface: "",
                    },
                ],
                responseParams: [
                    {
                        name: "title",
                        required: "true",
                        type: "string",
                        default: "",
                        describe: "文章标题",
                    },
                    {
                        name: "time",
                        required: "true",
                        type: "string",
                        default: "",
                        describe: "发布时间",
                    }
                ]

            }
        }
    },
    methods: {
        setTableHeaderColor({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                    return 'background-color: snow; color:#2c3e50';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.detailInfo{
    background-color: white;
    height: 100%;
    width: 100%;
}
.title{
    width: 100%;
    display: inline-flex;
    font-size:14px;
    align-items: flex-end;
    margin: 15px 0px 0px 15px;
    strong{
        font-weight:bolder; 
        font:"黑体"; 
        font-size:16px;
    }
    i{  
        display: flex;
        color:blue;
        align-items: center;
        margin: 2px 20px 0px 20px;
        font-size: 20px;
    }
}
.status{
    display: flex;
    align-items: flex-start;
    margin: 10px 0px 10px 70px;
    *{
        margin-left: 10px;
    }
}
.describe{
    text-align: left;
    label{
        margin: 30px 0px 0px 70px;
        span{
            color:#0070b8;
        }
    }
    .row{
        margin: 15px 0px 10px 0px;
    }
}
.parameters{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    font-size:14px;
    margin: 40px 0px 10px 15px;
    strong{
        font-weight:bolder; 
        font:"黑体"; 
        font-size:16px;
    }
    .table{
        margin: 20px 0px 0px 55px;
    }
    div{
        width:98%;
    }
    a{
        margin: 30px 0px 0px 50px;
    }
}
</style>
