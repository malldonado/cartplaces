import React, { useEffect, useState } from 'react'
import './App.css';
import Dashboard from './components/Dashboard.jsx';
import Tags from './components/index/Tags';
import Index from './components/index/Navbar';

function App() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <div>
            <Index></Index>
            <Tags></Tags>
        </div>
    );
}

export default App;