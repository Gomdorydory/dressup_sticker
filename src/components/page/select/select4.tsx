import React from 'react'
import { Piece } from '../../piece'

export const Select4 = (data:any) => {
  let topImgArray:string[] = [
    'https://i.pinimg.com/originals/e2/e9/16/e2e916d749045b2da9489286023deee3.png',
    'http://webimage.10x10.co.kr/image/basic600/384/B003841578-1.jpg',
    'https://image.shutterstock.com/image-vector/blue-river-ocean-wave-layer-260nw-1842730648.jpg'
  ]
  const topImg:any = topImgArray.map((e, index)=>(
      <Piece {...data} key={index} img={e}/>
  ))

return <div>
  <div style={{background:'#4D8B46', width:'500px', height:'200px', display:'flex'}}>
    {topImg}
  </div>
  </div>
}