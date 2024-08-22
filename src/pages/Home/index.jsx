import React,{useState, useCallback}from "react";
import {useNavigate} from 'react-router-dom'
import "./home.css"

const Homepage = () =>{
    const [value,setValue] = useState('');

    const navigate = useNavigate()
    
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    },[navigate,value])
      
        return (
            <div className="home">
                <div className="home-header">
                    <h1>VIDEO CALL APP</h1>
                <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Enter Room Code"
                
                />
                <button onClick={handleJoinRoom}>Join</button>
                </div>
            </div>
        )
};
export default Homepage;
