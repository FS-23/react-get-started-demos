

export default function Task(props){
     let {task} = props
     return (
         <div style={{display: 'flex' , backgroundColor: "#fff"}}>
              {task.title}
         </div>
     )
}