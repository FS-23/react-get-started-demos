function Article(props){
    console.log('article props:', props)
    return (
        <h2>{props.message}</h2>
    )
}

export default Article