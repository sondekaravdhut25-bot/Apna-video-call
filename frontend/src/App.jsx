import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/landing';
import { AuthProvider } from './contexts/AuthContext';
import Authentication from './pages/Authentication';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';


function App() {


  return (
    <>
      <Router>
          <AuthProvider>
            <Routes>

                {/* <Route path='/home' element={<Home/>}/> */}
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/auth' element={<Authentication/>}/>

                <Route path='/home' element={<HomeComponent/>}/>
                <Route path='/history' element={<History/>}/>

                <Route path='/:url' element={<VideoMeetComponent/>}/>
                
            </Routes>
            </AuthProvider>

        </Router>
    </>
  )
}

export default App
