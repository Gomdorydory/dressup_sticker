import React, {useState, useEffect} from 'react';
import { HexColorPicker } from 'react-colorful';

export const Select1 = (data:any) => {
    let colorHandler = (color:any) => {
      data.setColor(color);
    }

return <>
  <div style={{width:'100%', height: '200px', display:'flex'}}>
    <HexColorPicker color={data.color} onChange={colorHandler} style={{width:'100%', height:'100%'}}/>
  </div>

  </>
}