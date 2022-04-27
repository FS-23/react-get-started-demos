
import './css/index.css'
import Home from './pages/Home.js'
import Contact from './pages/Contact'
import TaskList  from './components/TaskList'
function App() {
  
  return (
    <div className="bg-danger">
         <Home />
         <TaskList />
    </div>
  );
}



export default App;
