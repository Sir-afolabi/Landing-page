import gallery1 from "../assets/images/Rectangle 22.png";
import gallery2 from "../assets/images/Rectangle 23.png";
import gallery3 from "../assets/images/Rectangle 24.png";
import gallery4 from "../assets/images/Rectangle 25.png";
import gallery5 from "../assets/images/Rectangle 26.png";
import gallery6 from "../assets/images/Rectangle 27.png";
import gallery7 from "../assets/images/Rectangle 28.png";
import gallery8 from "../assets/images/Rectangle 29.png";
import gallery9 from "../assets/images/Rectangle 30.png";
import gallery10 from "../assets/images/Rectangle 31.png";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-header-text">
        <h1>Photo</h1>
        <span className="section1-header">Gallery</span>
      </div>

      <div className="gallery-grid-container">
        <div>
          <img src={gallery1} alt="gallery1" />
        </div>
        <div>
          <img src={gallery2} alt="gallery2" />
        </div>
        <div>
          <img src={gallery3} alt="gallery3" />
        </div>
        <div>
          <img src={gallery4} alt="gallery4" />
        </div>
        <div>
          <img src={gallery5} alt="gallery5" />
        </div>
      </div>
      <div className="gallery-grid-container">
        <div>
          <img src={gallery6} alt="gallery6" />
        </div>
        <div>
          <img src={gallery7} alt="gallery7" />
        </div>
        <div>
          <img src={gallery8} alt="gallery8" />
        </div>
        <div>
          <img src={gallery9} alt="gallery9" />
        </div>
        <div>
          <img src={gallery10} alt="gallery10" />
        </div>
      </div>
    </div>
  );
}
