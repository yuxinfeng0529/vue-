<template>
    <div style="width: 50%;height: 250px;float: left;">
        <h1> 欢迎登录系统管理页面</h1>
    </div>
    <div id="mbin" style="width: 50%;height: 250px;float: right;"></div>
    <div id="main" style="width: 100%;height: 300px;float: right;"></div>
</template>
<script>
import { onMounted } from 'vue';
import * as echarts from 'echarts';
export default {
    setup() {
        onMounted(() => {
            var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption({
                title: {
                    text: '剩余存储空间'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // Use axis to trigger tooltip
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['仓库一', '仓库二', '仓库三', '仓库四']
                },
                series: [
                    {
                        name: 'A区存储',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'B区存储',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'C区存储',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'D区存储',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '剩余空间',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
            // 
            var myChart = echarts.init(document.getElementById('mbin'));
            myChart.setOption({
                title: {
                    text: '昨日订单量',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                // legend: {
                //     orient: 'vertical',
                //     left: 'left'
                // },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 210, name: '遗留订单' },
                            { value: 735, name: '完成数量' },
                            { value: 580, name: '未完成数量' },
                            { value: 484, name: '未结款数量' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        })
    }
}
</script>