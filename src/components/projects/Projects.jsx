import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>  

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/weatherapp.png"} alt="image" />
        </div>
        <div className="pinf">
        <h3>Weather Forecast App</h3>
          <p>
          This is self made weather forecast app. It prediction of what the atmosphere will be like in a particular place . 
          In other words, it is  predict the things like cloud cover, rain, snow, wind speed, and temperature before they happen.
           </p>
          <h4>Tech Stack</h4>
          <p>React . Material Ui . React-Bootstrap . ChakraUI . REST API</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://shashi-weather-app-react80.vercel.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/shashifw11/Weather-App"> CODE</a></button>
          </div>
        </div>
      </div>  

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/ecom.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Ecommerce</h3>
          <p>
           Self made ecommerce website using React 
           </p>
          <h4>Tech Stack</h4>
          <p>React . JavaScript  . CSS . Material Ui . React-Bootstrap</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://ecommerce-project-beta.vercel.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/shashifw11/Ecommerce-Project"> CODE</a></button>
          </div>
        </div>
      </div>
     
      <div className="pcards">
        <div className="pimg">
          <img src={"assets/KFC-homepage.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>KFC(clone)</h3>
          <p>
           KFC is a fast-food brand and quick-serve restaurant
             specializing in fried chicken.
           </p>
          <h4>Tech Stack</h4>
          <p>HTML . CSS . Javascript . Local Storage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://shashikfc.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/shashifw11/SHASHIKFC-"> CODE</a></button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/hotstar_homepage.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Disney+ Hotstar(clone)</h3>
          <p>
          Disney+ Hotstar is India’s largest premium streaming platform.
           </p>
          <h4>Tech Stack</h4>
          <p>React . JavaScript . MongoDB . Node Js . Express Js . CSS . Material Ui . FireBase</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://hotstarclonereact.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/shashifw11/hotstar-project-"> CODE</a></button>
          </div>
        </div>
      </div>  

     <div className="pcards">
        <div className="pimg">
          <img src={"assets/ZoomCar-homepage.png"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>ZOOMCAR(clone)</h3>
          <p>
            A clone of Zoomcar is a self-drive car rental service.
            </p>
            {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript  . Mongodb . Nodejs . expressjs </p>
          <div className="card_btn">
            <button><a target="_blank" href="http://3.82.160.93:2345/home">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/Raosandeep007/Zoom-Car-Clone"> CODE</a></button>
          </div>
        </div>
          </div>
          
      

       

      

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/lakme.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>LAKME(clone)</h3>
          <p>
          Lakmé was the country's first cosmetic brand to introduce make up to Indian women.
        
            </p>
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS . JavaScript . Localstorage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://lakme-clone.vercel.app/">DEMO</a></button>
            <button><a target="_blank" href=" https://github.com/nkil123/lakme_clone"> CODE</a></button>
          </div>
        </div>
      </div>


          {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/ZoomCar-homepage.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>ZOOMCAR(clone)</h3>
          <p>
            A clone of Zoomcar is a self-drive car rental service.
            </p>
          <h4>Tech Stack</h4>
          <p>React . Material-UI . Bootstrap . Styled-Components</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://clone-of-indeed.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/sheikhtausif/IndeedClone"> CODE</a></button>
          </div>
        </div>
          </div>
          */}

         
    </div>
  );
}
