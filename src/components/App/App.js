import React, { useEffect,useState } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export default function App() {
  
  const [urls, setUrls] = useState([])

  useEffect(()=>{
    getUrls().then(data=>setUrls(data.urls))
  },[])

  const submitURL = (newURL) => {
    fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      body: JSON.stringify(newURL),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(()=>{getUrls().then(data=>setUrls(data.urls))})
  }

  return (
     <main className="App">
       <header>
         <h1>URL Shortener</h1>
        <UrlForm submitURL={submitURL}/>
      </header>
      <UrlContainer urls={urls}/>
    </main>
   );
}

