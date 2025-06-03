export default function Card({ imageUrl, imageName, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-image" src={imageUrl} alt={imageName} />
      <h2 className="card-title">{imageName}</h2>
    </div>
  );
}
