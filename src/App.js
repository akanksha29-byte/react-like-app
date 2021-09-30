import "./styles.css";
import { useState } from "react";

export default function App() {
  const [totalLike, setTotalLike] = useState(0);
  const handleLike = () => {
    setTotalLike(totalLike + 1);
  };

  const handleDisLike = () => {
    if (totalLike > 0) {
      setTotalLike(totalLike - 1);
    }
  };
  return (
    <div className="App">
      <h1>Likes</h1>
      <h1 id="displayLike">{totalLike}</h1>
      <div className="btn-container">
        <span className="btn" onClick={handleLike}>
          <i className="fas fa-thumbs-up"></i>
        </span>
        <span className="btn" onClick={handleDisLike}>
          <i className="fas fa-thumbs-down"></i>
        </span>
      </div>
    </div>
  );
}
