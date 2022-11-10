import "./topbar.scss";

import GetAppIcon from '@material-ui/icons/GetApp';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="favicon.ico" alt="" />
          </a>
          <div className="option">
            <div className="itemContainer,option">
           <span> <a href="#intro">Home</a></span>
                     
          </div>
          <div className="itemContainer">
           <span>  <a href="#about">About</a></span>
                     
          </div>
          <div className="itemContainer">
            <span> <a href="#projects">Projects</a></span>
                     
                  </div>
                   <div className="itemContainer">
            <span> <a href="#contact">Contacts</a></span>
          
            
            </div>
               <div className="itemContainer" onClick={() => window.open("assets\Shashi_Kumar_fw11_220.pdf", "_blank")}>
              <span style={{ display: "flex" }}><GetAppIcon style={{height:"18px",margin:"2px",borderBottom:"none"}}/>  Resume</span>
          
            
            </div>
            </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
