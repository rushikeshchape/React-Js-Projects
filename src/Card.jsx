import React from "react";
import Image from "./Image";
function Card(props) {
    return (
        <>
        
            <div className='card_container'>
                <Image imgsrc={props.imgsrc}/>
                <h4>{props.ctit}</h4>
                <h3>{props.stitle}</h3>
                <button>Watch Now</button>
            </div>

        </>
    )
}

export default Card;