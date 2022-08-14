import React, { useRef, useState } from 'react';
import styles from './Upload.module.css';
import Cell from '../Cell';

// For user to upload files
const Uplaod = ({setSource,setLocation,location}) => {

    const inputRef = useRef(null);
    const [uploadDrag, setUploadDrag] = useState(false);

    const onUpload = async(target) => {
        let file = target?.files[0];
        EXIF.getData(file, () => {
            if (!file.exifdata.GPSLatitude || !file.exifdata.GPSLongitude) {
                setLocation({
                ...location,
                latitude: "Not found",
                longitude: "Not found"
            });
            } else {
                setLocation({
                ...location,
                latitude: file.exifdata.GPSLatitude[0].toString(),
                longitude: file.exifdata.GPSLongitude[0].toString()
            });
            }
        });
        
        setSource(URL.createObjectURL(file));
        

        if (file && inputRef.current) {
            inputRef.current.value = null
        }
    }

    const onUploadChange = e => onUpload(e.target);

    const onUploadClick = () => inputRef?.current?.click();

    const onUploadDragEnter = () => setUploadDrag(true);

    const onUplaodDragLeave = () => setUploadDrag(false);

    const onUploadDragOver = (e) => e.preventDefault();
    
    const onUploadDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setUploadDrag(false);
        onUpload(e.dataTransfer);

    }

  return (
      <div className="flex items-center justify-center w-1/2 border-2 border-style border-slate-300">
          <input 
              ref={inputRef}
              onChange={onUploadChange}
              type="file"
              accept="image"
              style={{display:'none'}}
          />
          <Cell
              text="Upload File"
              tooltip="Load the image from your device"
              icon="fa-solid fa-upload"

              control={
                  <button
                      className="w-full h-72"
                      id={styles.upload_button}
                      data-drag={uploadDrag}
                      onClick={onUploadClick}
                      onDragEnter={onUploadDragEnter}
                      onDragLeave={onUplaodDragLeave}
                      onDragOver={onUploadDragOver}
                      onDrop={onUploadDrop}
                  >
                    <span className="">
                        <p>Choose or drag file</p>
                        <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
              }
          />
          
    </div>
  )
}

export default Uplaod