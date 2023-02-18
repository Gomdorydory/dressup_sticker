import React from 'react'
import { Piece } from '../../piece'

export const Select3 = (data:any) => {
  let faceImgArray:string[] = [
    'https://i.pinimg.com/originals/e2/e9/16/e2e916d749045b2da9489286023deee3.png',
    'http://webimage.10x10.co.kr/image/basic600/384/B003841578-1.jpg',
    'https://image.shutterstock.com/image-vector/blue-river-ocean-wave-layer-260nw-1842730648.jpg'
  ]
  const faceImg:any = faceImgArray.map((e, index)=>(
      <Piece {...data} key={index} img={e}/>
  ))

return <div>
  <div style={{background:'#B3B147', width:'500px', height:'200px', display:'flex'}}>
    {faceImg}
  </div>
  </div>
}