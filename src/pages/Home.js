
function Home(props){
    console.log('props:', props)
    //props.title= "Modified title"
    return (
        <h1> {props.title} {props.username}</h1>
    )
}

export  default Home

//export UserInfo