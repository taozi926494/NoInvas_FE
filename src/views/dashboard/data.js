//  API调用量
export const useapi_data = {
  color: ['#58CA9A'],
  title:{
      text:'API调用量TOP10',
      top:30,
      textStyle:{
        fontSize: 16,
      }
  },
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '1%',
    top: '30%%',
    containLabel: true
  },
  xAxis:{
    type : 'category',
    data:['API1','API2','API3','API4','API5','API6','API7','API8','API9','API10'],
  },
  yAxis:[
    {
      type : 'value'
    }
  ],
  series:[{
      name:'调用量',
      type:'bar', //设置图表主题
      data:[123,88,78,65,54,45,32,20,15,10]
  }]
}

// 平台API调用量
export const useplat_data = {
  color: ['#3AA1FF'],
  title:{
      text:'平台API调用量TOP10',
      top:30,
      textStyle:{
        fontSize: 16,
      }
  },
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '1%',
    top: '30%%',
    containLabel: true
  },
  xAxis:{
    type : 'category',
    data:["重庆市发改委","贵阳市民政局","河南省财政局","北京市交通局","河南省发改委","贵阳市公安局","河南省经信委","北京市生态环境局",
    "北京市发改委","重庆市民政局"],
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis:[
    {
      type : 'value'
    }
  ],
  series:[{
      name:'API调用量',
      type:'bar', //设置图表主题
      data:[502,500,498,475,430,325,311,269, 234,229]
  }]
}

// 平台API接入量
export const uploadapi_data = {
  color: ['#5E83FB'],
  title:{
      text:'平台API接入量TOP10',
      top:30,
      textStyle:{
        fontSize: 16,
      }
  },
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '1%',
    top: '30%%',
    containLabel: true
  },
  xAxis:{
    type : 'category',
    data:["重庆市发改委","贵阳市民政局","河南省财政局","北京市交通局","河南省发改委","贵阳市公安局","河南省经信委","北京市生态环境局",
    "北京市发改委","重庆市民政局"],
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis:[
    {
      type : 'value'
    }
  ],
  series:[{
      name:'API接入量',
      type:'bar', //设置图表主题
      data:[100,92,83,80,72,70,65,62, 59,50]
  }]
}


function near7Days() {
  const days = []
  for (let i = 7; i > 0; i--) {
    const myDate = new Date(new Date() - i * 60 * 60 * 24 * 1000)
    days.push(Number(myDate.getMonth() + 1) + '/' + myDate.getDate())
  }
  return days
}

//  热力图
export const hot_data = {
  title:{
      text:'近7天API调用热力图TOP10',
      top:30,
      textStyle:{
        fontSize: 16,
      }
  },
  tooltip: {
    position: 'top'
  },
  grid: {
      height: '63%',
      y: '30%'
  },
  xAxis: {
      type: 'category',
      data: ["重庆市发改委","贵阳市民政局","河南省财政局","北京市交通局","河南省发改委","贵阳市公安局","河南省经信委","北京市生态环境局",
      "北京市发改委","重庆市民政局"],
      splitArea: {
          show: true
      }
  },
  yAxis: {
      type: 'category',
      // data: ['2019-9-15','2019-9-16','2019-9-17','2019-9-18','2019-9-19','2019-9-20','2019-9-21','2019-9-22','2019-9-23','2019-9-24','2019-9-25','2019-9-26',
      // '2019-9-27','2019-9-28','2019-10-01','2019-10-02','2019-10-03','2019-10-04','2019-10-05','2019-10-06','2019-10-07','2019-10-08','2019-10-09','2019-10-10',
      // '2019-10-11','2019-10-12','2019-10-13','2019-10-14','2019-10-15','2019-10-16'],
      data: near7Days(),
      splitArea: {
          show: true
      }
  },
  visualMap: {
      show: false,
      min: 0,
      max: 10,
      inRange: {
        color: ['#C5EBFE','#1C5DAA']
    }
      // calculable: true,
      // orient: 'horizontal',
      // left: 'right',
      // bottom: '3%'
  },
  series: [{
      name: 'API调用数',
      type: 'heatmap',
      data: [[0,0,3],[0,1,8],[0,2,12],[0,3,2],[0,4,0],[0,5,1],[0,6,2],
             [1,0,5],[1,1,6],[1,2,5],[1,3,7],[1,4,1],[1,5,0],[1,6,1],
             [2,0,1],[2,1,3],[2,2,0],[2,3,3],[2,4,0],[2,5,1],[2,6,3],
             [3,0,0],[3,1,1],[3,2,2],[3,3,3],[3,4,0],[3,5,2],[3,6,1],
             [4,0,5],[4,1,0],[4,2,1],[4,3,5],[4,4,1],[4,5,0],[4,6,3],
             [5,0,0],[5,1,3],[5,2,0],[5,3,4],[5,4,1],[5,5,2],[5,6,3],
             [6,0,2],[6,1,1],[6,2,1],[6,3,0],[6,4,2],[6,5,2],[6,6,4],
             [7,0,3],[7,1,8],[7,2,12],[7,3,2],[7,4,0],[7,5,1],[7,6,2],
             [8,0,5],[8,1,6],[8,2,5],[8,3,7],[8,4,1],[8,5,0],[8,6,1],
             [9,0,1],[9,1,3],[9,2,0],[9,3,3],[9,4,0],[9,5,1],[9,6,3],],
      label: {
          normal: {
              show: true
          }
      },
      itemStyle: {
          emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
      }
  }]
}


