import './style.css';
import Stop from '../../assets/stop.svg';
import Next from '../../assets/next.svg';
import Previous from '../../assets/previous.svg';
import Play from '../../assets/play.svg';
import Pause from '../../assets/pause.svg';
import { useRef, useState } from 'react';

export default function Footer({ currentMusic, audioRef, iconBtn, setIconBtn, handleChangeMusic }) {

    const progresRef = useRef(null);
    let intervalProgres = null;

    function playPause() {

        intervalProgres = setInterval(() => {

            if (audioRef.current.paused) {
                clearInterval(intervalProgres);
            }

            const duration = audioRef.current.duration / 60;
            const currentProgres = ((audioRef.current.currentTime / 60) * 100) / duration;

            progresRef.current.style.width = `${currentProgres}%`;
        }, 1000);

        if (audioRef.current.paused) {
            setIconBtn('Pause');
            audioRef.current.play();
            return;
        }

        setIconBtn('Play');
        audioRef.current.pause();
    }

    return (

        <footer>
            <div className='title'>
                <h3>{currentMusic.title}</h3>
                <strong>{currentMusic.artist}</strong>
            </div>
            <div className='container-player'>
                <div className='btns'>
                    <img src={Stop} />
                    <img src={Previous} onClick={() => handleChangeMusic('Previous')} />
                    <img src={iconBtn === 'Pause' ? Pause : Play} onClick={() => playPause()} />
                    <img src={Next} onClick={() => handleChangeMusic('Next')} />
                </div>
                <div className='container-progress'>
                    <div className='container-line'>
                        <div className='line'></div>
                        <div className='line-color' ref={progresRef}></div>
                    </div>
                </div>
            </div>
            <div className='empty'>.</div>
        </footer>

    )
}