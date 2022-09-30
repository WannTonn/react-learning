import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import * as echarts from 'echarts';
import "../china"; // 引入中国地图数据
import style from "./style.module.scss";
/**
 * @description 中国版图
 */

export default observer(() => {
  const mapRef = useRef();
  const [chart, setChart] = useState<any>();
  useEffect(() => {
    let charts = echarts.init(mapRef.current);
    let option = {
      tooltip: {
        show: false
      },
      geo: {
        map: "china",
        roam: false,// 一定要关闭拖拽
        zoom: 1.23,
        center: [0, 0], // 调整地图位置
        label: {
          normal: {
            show: false, //关闭省份名展示
            fontSize: "10",
            color: "rgba(0,0,0,0.7)"
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: "#0d0059",
            borderColor: "#389dff",
            borderWidth: 1, //设置外层边框
            shadowBlur: 5,
            shadowOffsetY: 8,
            shadowOffsetX: 0,
            shadowColor: "#01012a"
          },
          emphasis: {
            areaColor: "#184cff",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 5,
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      },
      series: [
        {
          type: "map",
          map: "china",
          roam: false,
          zoom: 1.23,
          center: [105, 36],
          // geoIndex: 1,
          // aspectScale: 0.75, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff"
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#0d0059",
              borderColor: "#389dff",
              borderWidth: 0.5
            },
            emphasis: {
              areaColor: "#17008d",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
    charts.setOption(option);
    setChart(charts);
  }, []);

  return (
    <div ref={mapRef} className={style.mapWrapper}></div>
  )
})