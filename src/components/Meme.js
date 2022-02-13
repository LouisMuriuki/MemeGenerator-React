
import React from "react"
export default function Meme(){
  

    const [image,setImage] = React.useState(
        {
        topText:"",
        BottomText:"",
        image:""
    })
    const [allMeme, setAllMeme]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(data=> data.json())
        .then(completedata => setAllMeme(completedata.data.memes ))
    })

    console.log(allMeme)

    function getmemeimage(){
     let randomnumber=Math.floor(Math.random() * allMeme.length)
     let url=allMeme[randomnumber].url
     setImage(prevsetmeme=> ({
         ...prevsetmeme,
         image:url
     }))

 }

    function Update(event){
        console.log(event)
        const{name,value}=event.target
        setImage(prevsetImage=>{
            console.log(image)
            return {...prevsetImage,
                [name]:value}

        })
    }
    

   
 
    return(
        <div className="form">
            <div  className="inputs">
            <input
             placeholder="Top Text"
              type="text" 
              name="topText"
              onChange={Update}
              value={image.topText}/>
            <input 
            placeholder="Bottom Text "
             type="text" 
             name="BottomText"
             onChange={Update}
             value={image.BottomText}/>
            </div>
            <button onClick={getmemeimage}>Get a new meme image </button> 
            <div></div> 
            
            <div className="meme">
                <img src={image.image} alt="" className="meme-images"/> 
                <h2 className="meme--text top">{image.topText}</h2>
                <h2 className="meme--text bottom">{image.BottomText}</h2>
            </div>
        </div>
    )
}