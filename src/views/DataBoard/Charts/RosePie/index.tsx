import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import * as echarts from 'echarts';
import style from './style.module.scss';

/**
 * @description 玫瑰南丁格尔图
 */

export default observer(() => {
  const pieRef = useRef();
  const [chart, setChart] = useState<any>();
  useEffect(() => {
    let charts = echarts.init(pieRef.current);
    const option = {
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [5, 25],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 18, name: 'rose 8' }
          ]
        }
      ]
    };
    charts.setOption(option);
    setChart(charts);

  }, [])
  return (
    <div ref={pieRef} className={style.pieContainer}></div>
  )
})