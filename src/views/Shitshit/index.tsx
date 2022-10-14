import React, { useState } from 'react';
import { observer } from 'mobx-react';
import style from './style.module.scss';
/**
 * @description 
 */

export default observer(() => {



  
  return (
    <div className={style.container}>
      {/* 游戏可视域容器 */}
      <div className={style.wrapper}>
        {/* 上方卡片区域 */}
        <div className={style.blocksBox}>
          1
        </div>

        {/* 下方盛放卡片区域 */}
        <div className={style.cardsBox}>
          2
        </div>
      </div>
    </div>
  )
})