import react from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from'./component/Navbar'
import Home from './pages/Home'
import Room from './pages/Room'
import CreateRoom  from "./pages/CreateRoom";



const App = () => {
  const [rooms, setRooms] = useState([]);
  const addRoom =(room) => {
    setRooms([...rooms , room])

  };
  const [ isCreateRoomopen , setIsCreateRoomOpen] = useState(false);
  
  const handleCreateRoomClick =()=>{
    setIsCreateRoomOpen(true);
  }

  const handleCloseCreateRoomClick =() => {
    setIsCreateRoomOpen(false);
  }

  return(
    <Router>
      <div>
        <Navbar onCreateRoomClick={handleCreateRoomClick}/>                                                
        
        <Routes>
        <Route path="/" element={<Home rooms={rooms} />} />
        <Route path="/Room" element={<Room/>} />
        
        
        </Routes>
        {isCreateRoomopen && <CreateRoom onAddRoom={addRoom} onClose ={ handleCloseCreateRoomClick}/> }
      </div>
    </Router>
  )
}
export default App;