function TaskItem (props){
    console.log('props:', props)
    return(
        <div className="bg-danger" style={{backgroundColor: props.task_element.color}}>
      
            <h1>{props.task_element.title}</h1>
            <p>{props.task_element.description}</p>
        </div>
    )
}

export default TaskItem