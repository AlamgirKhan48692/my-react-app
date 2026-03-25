import "../styles.css";
import pathway from "../assets/pathway.jpg";
import shore from "../assets/shore.jpg";
import grass from "../assets/grass.jpg";
import ship from "../assets/ship.jpg";
import santorini from "../assets/santorini.jpg";
import pigeon from "../assets/pigeon.jpg";

export function MoodBoardItem({ color, image, description }) {
  return (
    <div 
      className="mood-board-item"
      style={{ backgroundColor: color }}
    >
      <img 
        className="mood-board-image"
        src={image}
        alt={description}
      />
      <h3 className="mood-board-text">
        {description}
      </h3>
    </div>
  );
}

export default function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>
      <div className="mood-board">
        <MoodBoardItem color="#FFD700" image={pathway} description="Peaceful Pathway" />
        <MoodBoardItem color="#87CEEB" image={shore} description="Ocean Shore" />
        <MoodBoardItem color="#90EE90" image={grass} description="Green Fields" />
        <MoodBoardItem color="#FFA07A" image={ship} description="Sailing Adventure" />
        <MoodBoardItem color="#FFB6C1" image={santorini} description="Santorini View" />
        <MoodBoardItem color="#D3D3D3" image={pigeon} description="Urban Wildlife" />
      </div>
    </div>
  );
}