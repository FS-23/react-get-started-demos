
import { useState } from 'react'
function Article(props){
    let [articleName , setArtcleName] = useState('')
    console.log('article props:', props)

    function handleOnChange(event){
        console.log('event target:', event.target)
    }
    return (
       <>
                <h2>
                    {props.title}
                </h2>

                

                <div>
                   <input type="text" onChange={ } />
                   <h6> articleName:  {articleName}</h6>
                </div>
                    
       </>
    )
}

export default Article