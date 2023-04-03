export default function Card({ titulo, subtitulo, text }) {
    
    return (
        <div className="card">
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <p>{text}</p>
        </div>
    );
}