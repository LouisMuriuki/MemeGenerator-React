import troll from "../images/troll-face.png"
export default function Nav(){
    return(
        <nav>
            <img src={troll} alt="" className="meme-image"/>
            <h3>MEME GENERATOR</h3>
            <h6>by louis</h6>
        </nav>
    )
}