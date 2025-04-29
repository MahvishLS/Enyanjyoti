import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './Educ.css';

function Educ() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="educ-page">
      {/* Hero Section */}
      <div className="educ-hero" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), url("./images/e22.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 20px 60px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '40px'
      }}>
        <h2 className="educ-quote" style={{
          color: 'black'
        }}>
          "Education is the most powerful weapon which you can use to change the world."
        </h2>
      </div>

      {/* Cards Container */}
      <div className="educ-cards-container">
        {/* Conceptual Learning Card */}
        <MDBCard className="educ-card">
          <MDBRow className='g-0'>
            <MDBCol md='4' className="educ-card-img-col">
              <MDBCardImage 
                src='./images/e6.png' 
                alt='Conceptual Learning' 
                fluid 
                className="educ-card-image"
              />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody className="educ-card-body">
                <div className="educ-card-header">
                  <MDBCardTitle>Conceptual Learning</MDBCardTitle>
                </div>
                <MDBCardText>
                  Building a foundation of brilliance through deep conceptual understanding.
                  Elevate your thinking, embrace conceptual learning's power and see beyond
                  the surface where concepts become the keys to wisdom.
                </MDBCardText>
                <button className="educ-btn">
                  Learn Now
                </button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>

        {/* Life Skills Card */}
        <MDBCard className="educ-card">
          <MDBRow className='g-0'>
            <MDBCol md='4' className="educ-card-img-col">
              <MDBCardImage 
                src='./images/e7.png' 
                alt='Life Skills' 
                fluid 
                className="educ-card-image"
              />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody className="educ-card-body">
                <div className="educ-card-header">
                  <MDBCardTitle>Life Skills</MDBCardTitle>
                </div>
                <MDBCardText>
                  Empower yourself with life skills that last a lifetime. Unlock the secrets
                  to a successful and fulfilling life. Craft a meaningful life with essential
                  life skills.
                </MDBCardText>
                <button 
                  className="educ-btn"
                  onClick={() => handleNavigation('/sef')}
                >
                  Explore Now
                </button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>

        {/* Activity Based Learning Card */}
        <MDBCard className="educ-card">
          <MDBRow className='g-0'>
            <MDBCol md='4' className="educ-card-img-col">
              <MDBCardImage 
                src='./images/e8.png' 
                alt='Activity Based Learning' 
                fluid 
                className="educ-card-image"
              />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody className="educ-card-body">
                <div className="educ-card-header">
                  <MDBCardTitle>Activity Based Learning</MDBCardTitle>
                </div>
                <MDBCardText>
                  Engage, explore, excel through the magic of activity-based learning.
                  Hands-on learning for a head-start in life's journey. Turn lessons
                  into adventures with activity-based discovery.
                </MDBCardText>
                <button 
                  className="educ-btn"
                  onClick={() => handleNavigation('/act')}
                >
                  Check Now
                </button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    </div>
  );
}

export default Educ;