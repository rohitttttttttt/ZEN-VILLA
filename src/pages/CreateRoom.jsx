import {useState} from "react";
import './CreateRoom.css';

function CreateRoom({ onAddRoom, onClose }) {
    const [ name , setName] = useState('');
    const [description , setDescription ] = useState('');
    const [ numberOfPeople , setNumberOfPeople] = useState(1);
    const [visibilty, setVisibilty]= useState('public');
    const [imgURL , setImgURL]= useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddRoom({ name , description , numberOfPeople , visibilty , imgURL});
        onClose();
    }

    return (
        <div className="overlay">
            <div className="create-room-container">
                <button className="close-button" onClick={onClose}>X</button>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} rows="4" cols="50"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number of people:</label>
                        <input type="number" id="number" name="number"  value={numberOfPeople} onChange={(e)=>setNumberOfPeople(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="visibility">Visibility:</label>
                        <select id="visibility" name="visibility" value={visibilty} onChange={(e)=>setVisibilty(e.target.value)}>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                           type="text"
                           id="imageUrl"
                           value={imgURL}
                           onChange={(e) => setImgURL(e.target.value)}
    />
  </div>
                      
                    <button type="submit" className="submit-button">Create Room</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRoom;
