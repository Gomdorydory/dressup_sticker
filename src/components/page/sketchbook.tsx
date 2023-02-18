import React, {useRef, useEffect, useState} from 'react';
import Draggable, { DraggableData} from "react-draggable";
import { MenuButtons } from "./menubuttons";

export const SketchBook = (data:any) => {
  const [currentPosition, setCurrentPosition] = useState<{x:number, y:number}>({
    x: 0,
    y: 0
  });
  const [originPosition, setOriginPosition] = useState<{x:number, y:number}>({
    x: 0,
    y: 0
  });
  
  
  let rect:any
  let absoluteX:any
  let absoluteY:any

  const bookSize:any = useRef();
  useEffect(()=>{
    rect = bookSize.current.getBoundingClientRect()
    window.addEventListener('resize', rect); //resize 이벤트를 이용하여 사이즈 변경시 마다 resize 함수 호출
    data.setSize(rect); //data.size 변경

    // 페이지의 스크롤링 위치를 구합니다.
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 절대 위치를 구합니다.
    absoluteX = rect.left + scrollLeft;
    absoluteY = rect.top + scrollTop;

    return () => {
      window.removeEventListener('resize', rect)
    }
  },[])

  let boxData = data.size;
  //onDrag에 넣으면 갑자기 두배씩 뛰어댕김... why.
/*
  const onDrag = (e: any, d: DraggableData) => {
    console.log(e);
    setOriginPosition({x:currentPosition.x, y:currentPosition.y})
    if ( Number(e.clientX) > Number(boxData.left) &&
      Number(e.clientX) < Number(boxData.left + boxData.width) &&
      Number(e.clientY) > Number(boxData.top) &&
      Number(e.clientY) < Number(boxData.top + boxData.height)){
      setCurrentPosition({ x: e.pageX, y: e.pageY })
      console.log(currentPosition.x +','+currentPosition.y)
      console.log('범위 안 입니다.')
    } else {
      console.log('범위 밖으로 나갔습니다')
      setCurrentPosition({ x: originPosition.x, y: originPosition.y});
      console.log(originPosition.x+','+originPosition.y)
      console.log(d.lastX +','+ d.deltaY)
    }
  }
*/
//클릭 시 focus 하고, focus시에는 엑스 표시 만들기

const pieced:any = useRef();

let [zIndex, setZIndex] = useState(0);

const focus = (e:any) =>{
  e.target.style.border = "3px gray solid"
  e.target.style.zIndex = zIndex
  setZIndex(zIndex++)
}

const Blur = (e:any) =>{
  setZIndex(zIndex++)
  e.target.style.border = 0
}

  //아래의 div style은 생성된 div들이 겹쳐서 놓을 수 있게 해준다.
  let results = data.result? data.result.map((e:any, index:number)=>{
  return <Draggable>
    <div tabIndex={0} onFocus={focus} onBlur={Blur} style={{width:'50px', height:'50px', position:'absolute', padding:'0', margin:'0', left:currentPosition.x, top:currentPosition.y}}>
    {e}
    </div>
    </Draggable>

}):null

  return <div>
    <div>
      <div ref={bookSize} style={{width:'500px', height:'300px', border:'gray solid 1px', background: '#ffccaa'}}>
      {results}
      </div>
    </div>
    <MenuButtons {...data}/>
    </div>
}