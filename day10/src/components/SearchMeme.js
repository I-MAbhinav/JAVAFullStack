import React, { useEffect, useState } from "react";

async function SeachMeme(keyword) {
    const[keyword, setKeyword] = useState("car")
    function handleChange(event) {
        setKeyword(event.target.value)
    }

    useEffect(() => {
        console.log("keyword changed to:", keyword)
    }, [keyword])

    return (
        <div>
           < h1>Search Meme Component</h1>
           <img src="" alt="Meme" />
            <input type="text"  onChange={handleChange} value={value}/>

        </div>
    );
}
export default SeachMeme;