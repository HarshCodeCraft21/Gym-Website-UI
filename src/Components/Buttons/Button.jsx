import './Button.css';

export const Button = ({ value, BG, onClick }) => {
  return (
    <button 
      className="btn" 
      style={{ backgroundColor: BG }} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};
