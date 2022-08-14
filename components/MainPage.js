import React,{useState} from 'react'
import Uplaod from './Upload'

const MainPage = () => {

  const [source, setSource] = useState('');
  const [location, setLocation] = useState({
    latitude: "Upload Image",
    longitude: "Upload Image"
  });
  return (
    <div className="flex flex-col items-center gap-4 bg-teal-400">
      <Uplaod {...{ setSource, setLocation,location }} />
      <div className="flex w-1/2 gap-10">
        {source && <img className="h-auto w-1/2" src={source} alt="uploaded image" />}
        <div className="flex flex-col text-xl gap-10"> 
          <div>
            <p >Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
          <div>
            {Number.isInteger(parseInt(location.latitude)) && <button className="rounded-md p-2 bg-cyan-200 hover:bg-blue-800 hover:text-white">
              <a href={`https://www.google.com/maps/search/${location.latitude}+${location.longitude}`} target="_blank" rel="noopener noreferrer">View Location</a>
            </button>}
          </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default MainPage