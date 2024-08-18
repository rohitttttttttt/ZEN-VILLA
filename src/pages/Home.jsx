// Home.jsx
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home({ rooms }) {
  return (
    <div className="container">
      {rooms.map((room, index) => (
        <Room key={index} room={room} />
      ))}
    </div>
  );
}

function Room({ room }) {
  return <RoomItem room={room} />;
}

function RoomItem({ room }) {
  const navigate = useNavigate();

  const handleRoomClick = () => {
    navigate('/room');
  };

  return (
    <div className="box" onClick={handleRoomClick}>
      <img src={room.imgURL || "https://via.placeholder.com/150"} alt={room.name} className="room-image" />
      <div className="text-overlay">
        <h3 className="title">{room.name}</h3>
        <p className="description">{room.description}</p>
      </div>
    </div>
  );
}

export default Home;
