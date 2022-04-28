import TaskItem from "./TaskItem"
function TaskList(){
    let list = [
        {id: 1 ,color:"green" , title: "Learn reactJs" , description: "Learn reactJs documentation"},
        {id: 2 ,color: "blue", title: "Learn PHP" , description: "Learn PHP documentation"},
        {id: 3 , title:  "Learn Laravel" , color:"red", description: "Learn Laravel documentation"},
    ]

    return (
         <div>
             <h4>------------ Tasks list -----------------</h4>
             {list.map((task , index) => <TaskItem task_element = {task} key={index}/>)}
         </div>
    )
}

export default TaskList

