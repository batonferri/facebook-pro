import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import {  ref, getDownloadURL, uploadString } from "firebase/storage";

function InputBox() {
  const { data: session, status } = useSession();
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState(null);
  const inputRef = useRef(null);
  const fileRef = useRef(null);

  const postsCollectionRef = collection(db, "posts");

  const sendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    const docRef = await addDoc(postsCollectionRef, {
      post: newPost,
      name: session.user.name,
      timestamp: serverTimestamp(),
      image: newImage,
    })

    inputRef.current.value = "";

    const imageRef = ref(storage, `posts/${docRef.id}`)

    {imageRef && 

      await uploadString(imageRef, newImage, "data_url").then( async snapshot =>{
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db,'posts',docRef.id),{
            image:downloadURL
        })

        removeImage();
    })}
    
    
    
  };


  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setNewImage(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setNewImage(null);
  };

  return (
    <div
      className="bg-white p-2 rounded-2xl shadow-md
        text-grey-500 font-medium mt-6"
    >
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100
                     flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`what's on your mind, ${
              session.user.name.split(" ")[0]
            }?`}
            onChange={(event) => {
              setNewPost(event.target.value);
            }}
          />
          <button hidden onClick={sendPost}></button>
        </form>
        {newImage && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110
                    transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={newImage} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div onClick={() => fileRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input type="file" ref={fileRef} hidden onChange={addImage} />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
