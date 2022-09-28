import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { debounce } from '@/utils/util';
import './style.scss';
/**
 * @description 
 */
interface IProps {
  width?: number;
  height?: number;
  children: any;
}
export default observer((props: IProps) => {
  const { width = window.innerWidth, height = window.innerHeight, children } = props;
  const [style, setStyle] = useState<{width: number; height: number; transform?}>({width, height});
  /**
 * @description 配置比例
 * @param
 */
  const setScale = () => {
    let Style = {...style};
    let transform = `scale(${getScale()[0], getScale()[1]}) translate(-50%, -50%)`;
    setStyle({...Style, transform})

  }
  /**
 * @description 获取可视域宽高
 * @param
 */
  const getScale = () => {
    const w = window.innerWidth / width;
    const h = window.innerHeight / height;
    // const w = document.documentElement.clientWidth;
    // const h = document.documentElement.clientHeight;
    return [w, h];
  }
  useEffect(() => {
    window.onresize = debounce(setScale, 500);
    setScale();
    return () => {
      window.onresize = null;
    }
  }, [])
  return (
    <div style={style} className="ScreenContainer">
      {children}
    </div>
  )
})