import './Card.css';
import { Button } from '../Buttons/Button';

export const Card = ({ duration, price, level, BG }) => {
  return (
    <div className="card" style={{ backgroundColor: BG }}>
      <h3 className="card-duration">{duration}</h3>
      <h2 className="card-level">{level}</h2>
      <p className="card-price">{price}</p>
      <Button value="Get Plan" BG="#111" />
    </div>
  );
};
