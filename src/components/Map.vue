<template>
  <div class="map">
      <div id="chart" style="height:500px;width:600px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import jsonp from 'jsonp'
import 'echarts/map/js/china'

var option = {
    title:{
        text:'Vue地图展示',
        x:'center',
        textStyle:{
            color:'#f00'
        }
    },
    tooltip:{
        trigger:'item',
        formatter:'地区：{b}<br/>确诊：{c}'
    },
    series:[{
        type:'map',
        map:'china',
        // data: [
        //     {name: '北京', value:100},
        // ],
        label:{
            show:true,
            color:'blue'
        },
        itemStyle:{
            borderColor:'green'
        },
        zoom:1.3,
        emphasis:{
            label:{
                color:'#fff'
            },
             itemStyle:{
            areaColor:'#f60',
            borderColor:'green'
        },
        }
       
    }],
    visualMap: {
        type:'piecewise',
        pieces:[
            {min: 10000}, 
            {min: 1000, max: 9999},
            {min: 100, max: 999},
            {min: 10, max: 99},
            {min: 1, max: 9},
            {value: 0}
            
        ],
        inRange: {
            color: ['#fff','#ffaa85','#660208'],
        },
        itemWidth:15,
    },
};

export default {
    name:'Map',
    data(){
        return {
            myChart:''
        }
    },
    mounted(){
        this.getData();
        this.myChart = echarts.init(document.getElementById('chart'));
        // this.myChart.setOption(Option);
    },
    methods:{
        getData(){
            jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=15808925222427',function(err,data){
                // console.log(data);
                var list = data.data.list.map(function(item){
                    return {name:item.name,value:item.value}
                });
                console.log(list);
                option.series[0].data=list;
                // this.myChart.setOption(option);
            })

        }
    }

}




</script>
<style scoped>
#chart{
    margin: 0 auto;
}
</style>