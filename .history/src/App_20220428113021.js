
import './css/index.css'
import Home from './pages/Home.js'
import Contact from './pages/Contact'
import TaskList from './components/TaskList'
import Counter from './components/Counter'

import Artcle from './components/Article'
function App() {
  
  return (
    <div >
         {/* <Home title="Home page 1"  username="Youssef" />
         <Home title="Home page 2" /> */}

         <div style={{display: 'none'}}>
          <TaskList style={{display: 'none'}} />
          <Counter />
         </div>

         <Artcle message="Camera NIKON"/>
         <Artcle />
         <Artcle />
         <Artcle />
         <Artcle />
         <Artcle />
         <Artcle />
         <Artcle />
         <Artcle />
         <Artcle />
         <Artcle />
    </div>
  );
}



export default App;
