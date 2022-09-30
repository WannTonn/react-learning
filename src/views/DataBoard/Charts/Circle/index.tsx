import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import * as echarts from 'echarts';
import style from './style.module.scss';

/**
 * @description  圆环图
 */

export default observer(() => {
  const chartRef = useRef();
  const [chart, setChart] = useState<any>();
  useEffect(() => {
    let charts = echarts.init(chartRef.current);
    let percent = 0.8; //percent
    let all = 180; //彩色部分总大小，自定义，和最下方bottom的值一起决定环形图的角度
    let current = all * percent; // 当前用量 = all * percent
    const option = {
        
        series: [
            {
                type: "pie",
                label: {
                    show: false,
                },
                // itemStyle: {
                //
                // },
                center: ["50%", "50%"],
                radius: ["50%", "70%"],
                startAngle: 180, //起始角度，根据实际需要调节
                data: [
                    {
                        name: "用量",
                        value: current,
                        label: {
                            show: true,
                            position: "center",
                            formatter: (percent ? (percent * 100).toFixed(2) : 0) + "%",
                            textStyle: {
                                baseline: "bottom",
                                paddingTop: "-10px",
                                fontSize: 15,
                                color: "#fff",
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(232, 159, 71, 1)", // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(245, 184, 70, 1)", // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },

                          
                        },
                    },
                    {
                        name: "rest", // 实际显示部分是总量-用量
                        value: all - current,
                        itemStyle: {
                            color: "rgba(248, 171, 44, 0.16)",
                        },
                    },
                    {
                        name: "bottom",
                        value: 180,//底部透明部分的颜色，看实际情况，如果需要的是半圆图，这个透明部分的value值就变成和all相同的值，以此类推，可以自己调节value的大小
                        itemStyle: {
                            color: "transparent",
                        },
                    },
                ],
            },
        ],
    };
    

    charts.setOption(option);
    setChart(charts);

  }, [])
  return (
    <div ref={chartRef} className={style.container}></div>
  )
})