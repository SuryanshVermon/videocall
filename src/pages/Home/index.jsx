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
                <div className="home-img">
                    <div>
                    <p style={{fontSize:'20px',fontWeight:'600',color:'#fff',paddingLeft:'20px',fontFamily:"sans-serif"}}>Features :-</p>
                    </div>
                    <img src="https://res.cloudinary.com/ddhojexjl/image/upload/v1724356079/Screenshot_2024-08-23_at_1.02.44_AM_paujj2.png" alt="" width="400px"/>
                    <img src="https://res.cloudinary.com/ddhojexjl/image/upload/v1724356078/Screenshot_2024-08-23_at_1.01.53_AM_jcmwik.png" alt="" width="400px"/>
                    <img src="https://res.cloudinary.com/ddhojexjl/image/upload/v1724356079/Screenshot_2024-08-18_at_6.57.02_PM_zho9zw.png" alt="" width="400px"/>
                </div>
            </div>
        )
};
export default Homepage;
