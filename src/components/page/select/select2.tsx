import React from 'react'
import { Piece } from '../../piece'


export const Select2 = (data:any) => {
  let accImgArray:string[] = [
    'https://previews.123rf.com/images/ankomando/ankomando1609/ankomando160900021/63208287-%EC%97%AC%EC%9E%90%EC%9D%98-%EC%96%BC%EA%B5%B4-%ED%91%9C%EC%A0%95.jpg',
    'http://webimage.10x10.co.kr/image/basic600/384/B003841578-1.jpg',
    'https://image.shutterstock.com/image-vector/blue-river-ocean-wave-layer-260nw-1842730648.jpg'
  ]
//select2에서 piece를 클릭하면, draggable한 버튼이 sketchbook에 뜸.
  const accImg:any = accImgArray.map((e, index)=>(
      <Piece {...data} key={index} img={e}/>
  ))

return <div>
  <div style={{background:'#CC6666', width:'500px', height:'200px', display:'flex'}}>
    {accImg}
  </div>
  </div>
}