
import { useState } from 'react'
function Article(props){
    let [articleName , setArtcleName] = useState('')
    console.log('article props:', props)
    return (
        <h2>
            {props.title}

           <h6> articleName:  {articleName}</h6>
        </h2>
    )
}

export default Article