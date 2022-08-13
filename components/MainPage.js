import React,{useState,useEffect} from 'react'
import Uplaod from './Upload'

const MainPage = () => {

  const [source, setSource] = useState('');

  useEffect(() => {
    console.log(source);
  },[source])
  return (
    <div>
      <Uplaod {...{setSource}} />
      <p>{source}</p>
    </div>
  )
}

export default MainPage