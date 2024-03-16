"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState();
  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if(!file){
        setPickedImage(null);
        return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
        setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage  && <p>No image picked yet.</p> }
            {pickedImage && (
                <Image src={pickedImage} alt="The image selected by the user." fill />
            )}
        </div>

        <input
          onChange={handleImageChange}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/png"
          name={name}
          ref={imageInputRef}
          required
        />
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
