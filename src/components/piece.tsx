
import React, { useRef } from "react";

export const Piece:React.FC = (data:any) => {


  const mouseUp = (e: any)=> {
    let component = <img draggable='false' className='Piece' src={data.img} alt='곰돌이 사진' style={{width:'50px',  height:'50px'}}></img>
    data.setResult([...data.result, component]);}
  // 요소를 얕은 복사 합니다.

  return (
      <div className="Piece" style={{width:'50px', height:'50px', padding:'20px'}}>
        <img onMouseUp={mouseUp} draggable='false' className='Piece' src={data.img} alt='곰돌이 사진' style={{width:'50px',  height:'50px', border:'none'}}></img>
      </div>

  );
}