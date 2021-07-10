import './styles/makeQuiz.css';
import React from 'react'
import { Link } from 'react-router-dom'

const NameQuiz = ({ onSetTitle }) => {
    const handleChange = (e) => {
        console.log(e.target.value)
        onSetTitle(e.target.value)
    }

    return (
        <div className="mkquiz-container">

            <form required>

            <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Quiz Name</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                onChange={handleChange}
                required
                ></input>
            </div>

                <Link to="/questions" >
                    <input type="submit" className="btn btn-info" value="next" />
                </Link>
            </form>


        </div>
    )
}

export default NameQuiz