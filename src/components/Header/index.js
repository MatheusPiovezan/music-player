import './style.css';
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/T.png';

export default function Header() {
    return (
        <header>
            <div>
                <img src={Logo} />
            </div>
            <div className='profile'>
                <img className='profileImg' src={Profile} />
                <p>Bem Vindo, Matheus.</p>
            </div>
        </header>
    )
}