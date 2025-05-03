import React from 'react';
import './LifeSkills.css';

function LifeSkills() {
  return (
    <div className="life-skills-page">
      {/* Hero Section */}
      <section className="life-skills-hero-section">
        <div className='life-skills-hero-container'>
          <div className="life-skills-hero-content">
            <h2>LIFE SKILLS</h2>
            <p><em>Life isn't about finding yourself. Life is about creating yourself.</em></p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <div className="life-skills-container">
        <div className="life-skills-grid">
          
          {/* Skill 1 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: 'blue' }}>1. LEADERSHIP - Lead the Future</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/Zbe2KASX8q8?si=JeIJCS4T1suvtP2e" 
                title="Leadership" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: 'green' }}>2. STRESS MANAGEMENT - Be stress Free</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/3Nf2Pzcketg?si=gsgOjhfsA2zroAPn" 
                title="Stress Management" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: 'purple' }}>3. CRITICAL THINKING - Think and grow</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/hLgi444Ghww?si=vw5TKgEmcmA4Sz9D" 
                title="Critical Thinking" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: 'red' }}>4. SELF-AWARENESS - Know about yourself</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/RigCq0DtMHw?si=7eIaAcmvnaWlvGt1" 
                title="Self-Awareness" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skill 5 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: 'orange' }}>5. TIME MANAGEMENT - An aspect of life</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/UsBgXEYQO-o?si=AEAVrOagIs_qSeHm" 
                title="Time Management" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skill 6 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: '#C51162' }}>6. SELF DEFENCE - Protect Yourself</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/BcP9AMeeJmg?si=JBs9OkYZwsuUem9v" 
                title="Self Defence" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skill 7 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: '#004D40' }}>7. SOFT SKILLS - Essential in today's era</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/lKSwKm21IJg?si=_RbQRmYDXbzsRTuh" 
                title="Soft Skills" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skill 8 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: '#455A64' }}>8. FINANCIAL LITERACY - For financial development</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/0iRbD5rM5qc?si=3u7M2EYNTwsdwSEb" 
                title="Financial Literacy" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skill 9 */}
          <div className="life-skill">
            <div className="life-skill-spacer"></div>
            <div className="life-skill-header">
              <h3 style={{ color: '#827717' }}>9. INTERPERSONAL RELATIONSHIP - Connect</h3>
            </div>
            <div className="life-skill-video-container">
              <iframe 
                src="https://www.youtube.com/embed/0nyJWEwCuT0?si=-u2U7bJs3uVaJ-wJ" 
                title="Interpersonal Relationship" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeSkills;