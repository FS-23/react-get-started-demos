
import { useState } from 'react'
function Article(props){
    let [articleName , setArtcleName] = useState('Youssef')
    console.log('article props:', props)
    return (
        <h2>
            {props.title}

            {articleName}
        </h2>
    )
}

export default Article