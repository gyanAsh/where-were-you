import React,{useState} from 'react'
import Uplaod from './Upload'

const MainPage = () => {

  const [source, setSource] = useState('');
  const [location, setLocation] = useState({
    latitude: "Data not found",
    longitude: "Data not found"
  });
  return (
    <div className="flex flex-col items-center gap-4">
      <Uplaod {...{ setSource, setLocation,location }} />
      <div className="flex w-1/2 gap-10">
        {source && <img className="h-auto w-1/2" src={source} alt="uploaded image" />}
        <div className="text-xl"> 
          <p >Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      
      </div>
      
    </div>
  )
}

export default MainPage