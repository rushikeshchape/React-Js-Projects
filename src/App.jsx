import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
import Heading from './Heading'
const App = ()=>{
    return(
    <>
       <Heading/>
        <div id='card'>
            {Sdata.map((val) => {
                return (
                    <Card
                    key={val.id} 
                    imgsrc={val.imagesrc} 
                    stitle={val.stitle} 
                    ctit={val.ctitle} />
                );
            })}
        </div>
    </>
    )

}
export default App;