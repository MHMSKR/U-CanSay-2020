import React, { useState } from "react";
import {Redirect}from 'react-router-dom'
import { storage, db ,auth} from "../../config/config";


import "./Write.css";

function Write(user) {
  const imgInput = { imgUrl: "" };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [like, setLike] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [finishPost, setFinishPost] = useState(false);
  const [use, setuse] = useState(user)
  const [imageAsFile, setImageasFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(imgInput);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  
  var emailUser = auth.currentUser.email
  const Post = (e) => {
    e.preventDefault();
    setuse(user)
    console.log("start Of Post");
    if (!use) {
      console.log("not login");
    } else {
  
    
      var data = {
        Pname: title,
        Pcont: content,
        PImage: imageUrl,
        Like: like,
      };  
      console.log(data)
      var PostRef = db
        .collection("Post")
        .doc(emailUser.toString())
        .collection("MyPost")
        .doc(title);
      PostRef.set(data).then(function () {
        alert("Post Successfully");
        setFinishPost(!finishPost);
      });
      
    }
  };

  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageasFile((imageFile) => image);
  };

  const handleFirstBaseUpload = (e) => {
    e.preventDefault();

    console.log("Start of upload");
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setClick(!click);
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
          });
      }
      
    );
  setImageUrl(imageAsUrl.imgUrl)

  };
  

  return (
    <div>
      <div className="write">
        <div className="write-container">
          <form className="img-header" onSubmit={handleFirstBaseUpload}>
            <img src={imageAsUrl.imgUrl} alt=""/>
            <i class="fas fa-image" onClick={handleClick}></i>
            <p className="add-image">Add Image</p>
            <div className={click ? "upload-img-popup" : "show-popup"}>
              <i class="fas fa-times" onClick={handleClick}></i>
              <input type="file" onChange={handleImageAsFile} />
              <input type="submit" value="upload" className="upload" />
            </div>
          </form>

          <form className="form-container" onSubmit={Post}>
            <input
              type="text"
              className="tile"
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name="content"
              id="content"
              rows="auto"
              placeholder="Tell your story..."
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input type="submit" value="Post" className="post" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Write;
