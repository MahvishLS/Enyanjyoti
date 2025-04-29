import React from 'react';
import './Craft.css';

function Craft() {
  return (
    <div className="craft-page">
      {/* Hero Section without background image */}
      <section className="craft-hero-section">
        <div className='craft-hero-container'>
          <div className="craft-hero-content">
            <h2>Art and Craft</h2>
            <p><em>Learn creative, become creative.</em></p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="craft-projects-container">
        <div className="craft-projects-grid">
          
          {/* Project 1 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: '#880E4F' }}>1. Wall Hanging - Bamboo Sticks</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src='https://www.youtube.com/embed/LxHbPB6usmc?si=R7Zzdo3di9qKoMhQ' 
                title="Wall Hanging" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project 2 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: '#E65100' }}>2. Home Decor- Old Diya DIY</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src="https://www.youtube.com/embed/SRCptSWG-DA?si=L3xTDbS01764kHpG" 
                title="Home Decor" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project 3 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: '#01579B' }}>3. Ganesh Idol - Paper Clay</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src="https://www.youtube.com/embed/BNYcxrPr2v0?si=Awej0pbNQ2gd_maC" 
                title="Ganesh Idol" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project 4 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: '#827717' }}>4. Pen-Pencil holder - Waste Plastic bottles</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src="https://www.youtube.com/embed/VdohdU2uOBQ?si=T591z6HHAdJ6BgyV" 
                title="Pen-Pencil holder" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project 5 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: '#E57373' }}>5. Wall paintings - Broken Bangles</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src="https://www.youtube.com/embed/0aOLpHASf08?si=QAyZDYa0gB9vGqww" 
                title="Wall paintings" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project 6 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: '#3E2723' }}>6. Beautiful Lantern - Waste items</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src="https://www.youtube.com/embed/BJuru6ozsIQ?si=-GEwVPxQsbmlWivA" 
                title="Beautiful Lantern" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project 7 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: 'blue' }}>7. Garden Planters - Coconut shells</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src="https://www.youtube.com/embed/ZHZ2KgXCwRE?si=Rv0zGyS5cErmDlnH" 
                title="Garden Planters" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project 8 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: '#006064' }}>8. Table Decor's - Waste LED Bulbs</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src="https://www.youtube.com/embed/1or0k9TvsAc?si=4v-dTHYYbnKlDHJO" 
                title="Table Decor" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project 9 */}
          <div className="craft-project">
            <div className="craft-project-spacer"></div>
            <div className="craft-project-header">
              <h3 style={{ color: '#FF1744' }}>9. Flower Vase - Plastic Spoons</h3>
            </div>
            <div className="craft-video-container">
              <iframe 
                src="https://www.youtube.com/embed/a2mT6FNWTOM?si=bUtmsT4OVUfH16FG" 
                title="Flower Vase" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Craft;