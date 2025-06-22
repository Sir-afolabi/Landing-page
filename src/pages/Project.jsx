import projectImage1 from "../assets/images/image 333.png";
import projectImage2 from "../assets/images/image 34.png";
import projectImage3 from "../assets/images/image 35.png";

export default function Projects() {
  return (
    <div className="project-container">
      <div className="proj-header-text">
        <h1>Sample</h1>
        <span className="section1-header">Project 1</span>
      </div>
      <img src={projectImage1} alt="projectImage1" className="projectImage1" />
      <div className="project-second-grid">
        <img src={projectImage2} alt="projectImage2" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nam a
          expedita iste accusantium atque modi accusamus vitae saepe veritatis
          unde alias vero natus perspiciatis. Ipsum nihil consequuntur
          perspiciatis libero.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quis, nam a expedita iste accusantium atque modi
          accusamus vitae saepe veritatis unde alias vero natus perspiciatis.
          Ipsum nihil consequuntur perspiciatis libero. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Quis, nam a expedita iste
          accusantium atque modi accusamus vitae saepe veritatis unde alias vero
          natus perspiciatis. Ipsum nihil consequuntur perspiciatis libero.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Quis, nam a
          expedita iste accusantium atque modi accusamus vitae saepe veritatis
          unde alias vero natus perspiciatis. Ipsum nihil consequuntur
          perspiciatis libero. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quis, nam a expedita iste accusantium atque modi
          accusamus vitae saepe veritatis unde alias vero natus perspiciatis.
          Ipsum nihil consequuntur perspiciatis libero.Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Quis, nam a expedita iste
          accusantium atque modi accusamus vitae saepe veritatis unde alias vero
          natus perspiciatis libero.
        </p>
      </div>

      <img src={projectImage3} alt="projectImage3" className="projectImage3" />
    </div>
  );
}
