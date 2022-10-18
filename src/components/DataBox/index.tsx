import React, {useState} from 'react';
import { observer } from 'mobx-react';
import style from './style.module.scss';
/**
 * @desctiption 数据的box容器
  */

interface IProps {
  children?: React.ReactNode
}
export default observer((props: IProps) => {
  const {children} = props;
  return (
    <div className={style.box}>
      {children}
    </div>
  )
})