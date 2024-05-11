
import './App.scss';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const App = () => {
  return(
    <div className='app-container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
           <Outlet></Outlet>
        </div>
      </div>
      
      
     <div>
     
     </div>
    </div>
  )
}


 
export default App;
