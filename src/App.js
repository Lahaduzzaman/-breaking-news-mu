import React, { useEffect } from 'react';
// import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [articles, setArticles] = useState([]);
  useEffect( () => {
    const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=80c696efd72d484ea401955fb2afc8f2';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  useEffect( () =>{
    const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=80c696efd72d484ea401955fb2afc8f2';
    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article = {article}></News>)
      }
    </div>
  );
}

export default App;