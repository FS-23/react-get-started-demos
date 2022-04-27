
import Task from './Task'
export default function TaskList(props){
        let tasks = [
            {id: 1 , title: "Task1" , description: "Task 1 desc"},
            {id: 2 , title: "Task2" , description: "Task 3 desc"},
            {id: 3 , title: "Task3" , description: "Task 3 desc"},
        ]

        return (
            <>
               <h4>Tasks list</h4>
               <div>
                   {tasks.map((task , index)=> <Task task={task} key={index}/>)}
               </div>

            </>
        )
}