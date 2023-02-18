import React, {useState} from 'react';
import {Select1} from './select/select1'
import {Select2} from './select/select2'
import {Select3} from './select/select3'
import {Select4} from './select/select4'
import {Select5} from './select/select5'


export const MenuButtons = (data:any) => {

  const [content, setContent] = useState();
  
  const handleClickButton = (e:any) =>{
    const name = e.target.innerText;
    setContent(name);
  }
    

  const buttonData = [
    {color: `${data.color}`, text:'color'},
    {color: '#CC6666', text:'hairstyle'},
    {color: '#B3B147', text:'face'},
    {color: '#4D8B46', text:'top'},
    {color: '#304D82', text:'bottom'},
  ]

  const selectComponent = {
    color: <Select1 {...data} />,
    hairstyle: <Select2 {...data} />,
    face: <Select3 {...data} />,
    top: <Select4 {...data} />,
    bottom: <Select5 {...data} />
  }


  return(<div>
    <div style={{display:'flex'}}>
    {buttonData.map((e:any)=>{
      return (
        <div onClick={handleClickButton} style={{background:`${e.color}`, width:'100px', height:'30px', color:'white'}}> {e.text}</div>
      )
    })}
    </div>
    {content ? <div>{selectComponent[content]}</div> : <Select1 {...data}/>}
    </div>
  )
} 