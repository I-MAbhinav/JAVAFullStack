import { use } from "react";
import './App.js';
import { useState,useEffect } from "react";

function RandomGif(){
    const [image,setImage]=useState("");

   async function generateImage(){
       const url="https://api.giphy.com/v1/gifs/random?api_key=YOUR_API_KEY&tag=&rating=g";
       const response=await fetch(url);
       const data=await response.json();
       console.log(data);
       setImage(data.url);
       setIsloading(false);

   }
   useEffect(()=>{
       generateImage();
   },[])

       return {
    //     <div>
    //         <h1>Random Gif Generator</h1>
    //         {isLoading ? <h2>Loading...</h2> : <img src={image} alt="Random Gif" />}
       
    //         <button onClick={generateImage}>Generate</button>
    //    </div> 
    }
}
export default RandomGif;