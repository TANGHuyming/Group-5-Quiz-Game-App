export default function AboutCard({image, name, description}) {
    return (
        <div className="card-container">
            <img src={image} alt="Developer" />
            <h2 className="card-title">{name}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
}