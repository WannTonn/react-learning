import React, { useState } from 'react';
import { observer } from 'mobx-react';
import ScreenAdapter from '@/components/ScreenAdapter';
import Map from './Charts/Map';
import RosePie from './Charts/RosePie';
import StackedLine from './Charts/StackedLine';
import Bar from './Charts/Bar';
import Circle from './Charts/Circle';
import style from './style.module.scss';
/**
 * @description 大屏数据面板
 */

export default observer(() => {
  return (
    <ScreenAdapter>
      <div className={style.container}>
        <div className={style.l}>

          <RosePie></RosePie>
        </div>
        <div className={style.center}>
          <Map></Map>
          <Bar></Bar>

        </div>
        <div className={style.r}>

          <StackedLine></StackedLine>
          <Circle></Circle>
        </div>




      </div>
    </ScreenAdapter>
  )
})