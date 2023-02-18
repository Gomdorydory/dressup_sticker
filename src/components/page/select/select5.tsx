import React from 'react'
import { Piece } from '../../piece'

export const Select5 = (data:any) => {
  let bottomImgArray:string[] = [
    'https://i.pinimg.com/originals/e2/e9/16/e2e916d749045b2da9489286023deee3.png',
    'http://webimage.10x10.co.kr/image/basic600/384/B003841578-1.jpg',
    'https://image.shutterstock.com/image-vector/blue-river-ocean-wave-layer-260nw-1842730648.jpg'
  ]
  const bottomImg:any = bottomImgArray.map((e, index)=>(
      <Piece {...data} key={index} img={e}/>
  ))

return <div>
  <div style={{background:'#304D82', width:'500px', height:'200px', display:'flex'}}>
    {bottomImg}
  </div>
  </div>
}