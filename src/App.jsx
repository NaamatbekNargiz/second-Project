import ShoeCard from "./components/ShoeCard.jsx";

import Shoes1 from "./assets/images/shoes 1.png";
import Shoes2 from "./assets/images/shoes 2.png";
import Shoes3 from "./assets/images/shoes 3.png";
import Shoes4 from "./assets/images/shoes 4.png";
import Shoes5 from "./assets/images/shoes 5.png";
import Shoes6 from "./assets/images/shoes 6.png";
import Shoes7 from "./assets/images/shoes 7.png";
import Shoes8 from "./assets/images/shoes 8.png";
import Shoes9 from "./assets/images/shoes 9.png";
import Shoes10 from "./assets/images/shoes 10.png";

const products = [
  {
    title: "Мужские Кроссовки Nike Blazer  Suede",
    image: Shoes1,
    price: "12 999 som.",
  },
  {
    title: "Женские Кроссовки Adidas Superstar",
    image: Shoes2,
    price: "9 999 som.",
  },
  {
    title: "Мужские Кроссовки Puma RS-X3",
    image: Shoes3,
    price: "10 499 som.",
  },
  {
    title: "Женские Кроссовки Reebok Classic ",
    image: Shoes4,
    price: "8 499 som.",
  },
  {
    title: "Мужские Кроссовки New Balance 574",
    image: Shoes5,
    price: "11 999 som.",
  },
  {
    title: "Мужские Кроссовки New Balance 574",
    image: Shoes6,
    price: "12 999 som.",
  },
  {
    title: "Мужские Кроссовки New Balance 574",
    image: Shoes7,
    price: "10 999 som.",
  },
  {
    title: "Мужские Кроссовки New Balance 574",
    image: Shoes8,
    price: "9 999 som.",
  },
  {
    title: "Мужские Кроссовки New Balance 574",
    image: Shoes9,
    price: "5 999 som.",
  },
  {
    title: "Мужские Кроссовки New Balance 574",
    image: Shoes10,
    price: "10 500 som.",
  },
  {
    title: "Мужские Кроссовки New Balance 574",
    image: Shoes5,
    price: "11 599 som.",
  },
  {
    title: "Мужские Кроссовки New Balance 574",
    image: Shoes7,
    price: "11 999 som.",
  },
];

export default function App() {
  return (
    <div className="first-conainer">
      {products.map((item) => (
        <ShoeCard image={item.image} title={item.title} price={item.price} />
      ))}
    </div>
  );
}
