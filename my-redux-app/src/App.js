import React, { useEffect } from 'react';
import { fetchSong } from '../action/songs';
import TitleForm from './components/TitleForm';
import Title from './components/Title';
import Artist from './components/Artist';


import './App.css';

function App(props) {

  useEffect(() => {
    props.fetchSong();
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <TitleForm />
        <Title title={props.title} />
        <Artist artist={props.artist} />

      </header>
    </div>
  );
}

export default App;


// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1
// https://api.lyrics.ovh/