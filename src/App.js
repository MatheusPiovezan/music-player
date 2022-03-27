import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Templates from './components/Templates';
import { musics } from './musics';
import { useState, useRef } from 'react';

function App() {

  const audioRef = useRef(null);
  const [musicData, setMusicData] = useState([...musics]);
  const [currentMusic, setCurrentMusic] = useState({ id: 0, title: '', artist: '' });
  const [iconBtn, setIconBtn] = useState('Pause');

  function setMusic(music) {
    setIconBtn('Play');
    audioRef.current.src = music.url;
    setCurrentMusic(music);
  }

  function handleChangeMusic(option) {
    const newMusic = option === 'Next' ? currentMusic.id + 1 : currentMusic.id - 1;
    
    const otherMusic = musicData.find((music) => music.id === newMusic);

    if (!otherMusic) {
      return;
    }

    setMusic(otherMusic);
  }

  return (
    <div className="container">
      <Header />
      <main musics={musics}>
        <h2>The best play list</h2>
        <div className='container-cards'>
          {musicData.map((item) => (
            <div key={item.id} onClick={() => setMusic(item)}>
              <Templates
                title={item.title}
                description={item.description}
                cover={item.cover}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer
        audioRef={audioRef}
        currentMusic={currentMusic}
        iconBtn={iconBtn}
        setIconBtn={setIconBtn}
        handleChangeMusic={handleChangeMusic}
      />

      <audio ref={audioRef} />
    </div>
  );
}

export default App;
