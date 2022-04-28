
import './css/index.css'
import Home from './pages/Home.js'
import Contact from './pages/Contact'
import TaskList from './components/TaskList'
import Counter from './components/Counter'
function App() {
  
  return (
    <div >
         {/* <Home title="Home page 1"  username="Youssef" />
         <Home title="Home page 2" /> */}

         <TaskList style={{display: 'none'}} />
         <Counter />
    </div>
  );
}



export default App;