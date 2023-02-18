import React, {useState} from "react";
import { SketchBook } from "./components/page/sketchbook";
import {Header} from './components/page/header'

type result = {
  skin: any,
  skincolor: any,
  head: any,
  eyebrow: any,
  eyebrowcolor: any,
  eyes: any,
  eyescolor: any,
  nose: any,
  mouth: any,
  hairstyle: any,
  top: any,
  bottom: any
}

// 1. 드래그 앤 드롭으로 시작하면, 요소 복사 / 스케치북 위에 올리면 요소 result에 추가 / 다른 곳에 올리면 복사된 요소 삭제
// 2. 각 piece 컴포넌트에 스크롤 버튼 추가
// 3. 사진첩에 저장하기 버튼 추가

export const App = () =>{
  // 결과 화면
  const [result, setResult] = useState([]);
  const ResultContext = React.createContext(result);
  // 선택 컬러 //각 객체 안에 변수 저장 //객체 선택 후 컬러 선택하면 해당 컬러만 변경되도록
  const [color, setColor] = useState('#FFE4BD');
  // 결과 화면 사이즈
  const [size, setSize] = useState<{size:any}>({size : 0});

  return (
    <div className="App" style={{display:'flex', justifyContent:'center'}}>
      <div style={{display:'flex', flexDirection:'column',justifyContent:'center', textAlign:'center'}}>
      <Header />
      <SketchBook result={result} setSize={setSize} setColor={setColor} color={color} size={size} setResult={setResult}/>
      <button onFocus={(e) =>{console.log('Focused')}} >dsdsdsds</button>
      </div>
    </div>
  )
}