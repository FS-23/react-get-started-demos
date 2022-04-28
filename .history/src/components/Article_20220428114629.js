
import { useState } from 'react'
function Article(props){
    let [articleName , setArtcleName] = useState('')
    console.log('article props:', props)

    function handleOnChange(event){
        console.log('value:', event.target.value)
    }
    return (
       <>
                <h2>
                    {props.title}
                </h2>

                

                <div>
                   <input type="text" onChange={handleOnChange } />
                   <h6> articleName:  {articleName}</h6>
                </div>
                    
       </>
    )
}

export default Article