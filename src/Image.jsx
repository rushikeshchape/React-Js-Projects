import React from "react";

function Image(props) {
    return (<>
        <div className='img'>
            <img src={props.imgsrc} alt='image'></img>
        </div>
    </>);
}
export default Image;