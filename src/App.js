import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing'
import NameQuiz from './components/NameQuiz'
import React, { useState } from 'react'


function App() {
    const [quizTitle, setQuizTitle] = useState('')
    return (
        <div className="App">
        <Route exact path="/" component={Landing} />

        <Route path="/create" render={() => (
            <NameQuiz
                onSetTitle={setQuizTitle}
            />)} />
            {quizTitle}
        </div>
    );
}

export default App;
