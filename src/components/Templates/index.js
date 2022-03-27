import './style.css';

export default function Templates({ title, description, cover }) {
    return (
        <div className='cards'>
            <div>
                <img src={cover} />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}