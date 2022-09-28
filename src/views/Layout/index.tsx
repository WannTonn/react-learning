import React, { useState } from 'react';
import { observer } from 'mobx-react';

/**
 * @description 
 */
 interface IProps {
  children?: React.ReactNode;
}
export default observer((props: IProps) => {
  return (
    <div>asdasd
      {props.children}
    </div>
  )
})