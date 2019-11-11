export default [{
        name: "科技计划管理制度查询",
        time: "2019-10-14 15:22:22",
        status: ["已发布", "查询", "登录验证"],
        requestType: "GET",
        submitType: "GET参数",
        interfaceStatus: "已发布",
        address: "/execute?sys=henankejixinxiguanli&api=kejijihuaguanlizhiduchaxun",
        dataType: "JSON",
        responseType: "JSON",
        interfaceDescribe: "分页查询科技计划管理制度查询",
        requestParams: [{
            name: "page",
            required: "true",
            type: "string",
            default: "1",
            describe: "页码",
            referenceinterface: "",
        }, ],
        responseParams: [{
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
        ],
        spamplesAddress: 'http://127.0.0.1:5000/execute?sys=henankejixinxiguanli&api=kejijihuaguanlizhiduchaxun&page=1'
    },
    {
        name: "科技奖励查询",
        time: "2019-10-15 10:15:12",
        status: ["已发布", "查询"],
        requestType: "GET",
        submitType: "GET参数",
        interfaceStatus: "已发布",
        address: "/search?sys=henankejixinxiguanli&api=kejijijianglichaxun",
        dataType: "JSON",
        responseType: "JSON",
        interfaceDescribe: "查询科技奖励查询相关",
        requestParams: [{
                name: "keyword",
                required: "true",
                type: "string",
                default: "",
                describe: "搜索关键字",
                referenceinterface: "",
            },
            {
                name: "page",
                required: "true",
                type: "string",
                default: "1",
                describe: "页码",
                referenceinterface: "",
            },
        ],
        responseParams: [{
                name: "title",
                required: "true",
                type: "string",
                default: "",
                describe: "文章标题",
            },
            {
                name: "url",
                required: "true",
                type: "string",
                default: "",
                describe: "文章链接",
            }
        ],
        spamplesAddress: 'http://127.0.0.1:5000/search?sys=henankejixinxiguanli&api=kejijianglichaxun&keyword=科技&page=1'
    }
]