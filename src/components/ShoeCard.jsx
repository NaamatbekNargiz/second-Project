import "./shoesCard.css";
// import Vector from "./assets/icons/Vector.svg";

export default function ShoeCard({ image, price, title }) {
  return (
    <div>
      <div className="second-container">
        {/* <img src={Vector} alt="love" /> */}
        <img src={image} className="card" alt="shoes" />
        <p className="text">{title}</p>
        <span className="som">
          <p className="mini-text">ЦЕНА:</p>
          {price}
        </span>
      </div>
    </div>
  );
}
