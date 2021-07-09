import './styles/home.css';
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="background-gradient">
            <div>
            <h1 className="logo">Quizzly</h1>
            
            <div className="btn-container">
                <Link to="/create" >
                    <button type="button" className="btn btn-primary">create quiz</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Landing