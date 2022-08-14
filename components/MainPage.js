import React,{useState,useEffect} from 'react'
import Uplaod from './Upload'

const MainPage = () => {

  const [source, setSource] = useState('');

  useEffect(() => {
    console.log(source);
  },[source])
  return (
    <div className="flex justify-center">
      <Uplaod {...{setSource}} />
    </div>
  )
}

export default MainPage