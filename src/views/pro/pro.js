import { useState } from "react";
import "./pro.css"
import Input from "../../components/Input/Input";
const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleUpload = () => {
      if (!image) {
        alert("Please select an image first.");
        return;
      }
  
      const formData = new FormData();
      formData.append("image", image);
  
      fetch("https://book-backend-rlyf.onrender.com/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => alert(data.message))
        .catch((err) => console.error(err));
    };
    const [Name,SetName] = useState("");
    const [age,Setage] = useState("");
    const [Gender,SetGender] = useState("");
    const [Height,SetHeight] = useState("");
    const [Weight,SetWeight] = useState("");

  
    return (
      <div className="checker-view">
        <div className="details-form">
          <h3 className="upload-head">Basic Details</h3>
          <form>
              <Input label={"Name:"} placeholder={"Enter your name"} onChange={(e)=>SetName(e.target.value)} value={Name}></Input>
              <Input label={" Age: "} placeholder={"Enter your age"} onChange={(e)=>Setage(e.target.value)} value={age}></Input>
              <Input label={"Gender:"} placeholder={"Enter your gender"} onChange={(e)=>Setage(e.target.value)} value={Gender}></Input>
              <Input label={"Weight:"} placeholder={"Enter your weight"} onChange={(e)=>Setage(e.target.value)} value={Weight}></Input>
              <Input label={"Height:"} placeholder={"Enter your height"} onChange={(e)=>Setage(e.target.value)} value={Height}></Input>
             
          </form>
          <div className="Notesec">
            <span >
            Note: The predictions provided are generated by a machine learning model based on the uploaded image and input data. While we strive for accuracy, results may vary. Your data is securely processed and not shared with any third parties, ensuring privacy and confidentiality.
             For any deficiencies predicted, it is recommended to consult a healthcare professional for proper diagnosis and guidance.
            </span>
          </div>
          <button className="submitbtn">Submit</button>
        </div>
      <div className="img-upload-container">
        <h3 className="upload-head">Upload Image</h3>
        <input
        type="file"
        accept="image/*"
        id="fileInput"
        onChange={handleFileChange}
        className="hidden-input"
      />
      <label htmlFor="fileInput" className="custom-file-button">
        Choose File
      </label>
      
  
        {preview && (
          <div>
            <h4>Preview:</h4>
            <img src={preview} alt="Uploaded Preview" className="imgbox" />
          </div>
        )}
        <br/>
  
        <button className="btn-upload" onClick={handleUpload}>Upload</button>
      </div>
      </div>
      
    );
  };
  
  export default ImageUploader;