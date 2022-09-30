import React, { useState } from 'react';
import { observer } from 'mobx-react';
import ScreenAdapter from '@/components/ScreenAdapter';
import Map from './Charts/Map';
import RosePie from './Charts/RosePie';
import StackedLine from './Charts/StackedLine';
import Bar from './Charts/Bar';
import Circle from './Charts/Circle';
/**
 * @description 大屏数据面板
 */

export default observer(() => {
  return (
    // <ScreenAdapter>
    <div>
        <Map></Map>


        <RosePie></RosePie>

        <StackedLine></StackedLine>

        <Bar></Bar>
        <Circle></Circle>
    </div>
    // </ScreenAdapter>
  )
})