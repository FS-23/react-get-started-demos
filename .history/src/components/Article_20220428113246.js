function Article(props){
    props.title = "Hello"
    console.log('article props:', props)
    return (
        <h2>{props.title}</h2>
    )
}

export default Article