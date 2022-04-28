
import { useState } from 'react'
function Article(props){
    let [articleName , setArtcleName] = useState('')
    console.log('article props:', props)
    return (
       <>
                <h2>
                    {props.title}
                </h2>

                

                <div>
                   <input type="text" onChange={ (event) => console.log('event:'n event)} />
                   <h6> articleName:  {articleName}</h6>
                </div>
                    
       </>
    )
}

export default Article