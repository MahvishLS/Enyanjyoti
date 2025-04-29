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
import './Act.css'; // Create this CSS file for custom styles

function Act() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="act-page">
      {/* Hero Section */}
      <div className="act-hero" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), url("./images/e21.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 className="act-title">Activity Based Learning</h1>
        <p className="act-subtitle">Learn by doing with interactive activities</p>
      </div>

      {/* Main Content */}
      <div className="act-container">
        {/* Quiz Card */}
        <MDBCard className="act-card">
          <MDBRow className='g-0'>
            <MDBCol md='4' className="act-card-img-col">
              <MDBCardImage 
                src='./images/e16.png' 
                alt='General Knowledge Quiz' 
                fluid 
                className="act-card-image"
              />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody className="act-card-body">
                <div className="act-card-header">
                  <MDBCardTitle>General Knowledge Quiz</MDBCardTitle>
                </div>
                <MDBCardText>
                  Solve interesting quizzes, test your knowledge and enjoy learning.
                  Challenge yourself with our curated collection of fun and educational quizzes.
                </MDBCardText>
                <button 
                  className="act-btn"
                  onClick={() => handleNavigation('/quiz')}
                >
                  Test Now
                </button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>

        {/* Craft Card */}
        <MDBCard className="act-card">
          <MDBRow className='g-0'>
            <MDBCol md='4' className="act-card-img-col">
              <MDBCardImage 
                src='./images/e15.png' 
                alt='Art and Craft' 
                fluid 
                className="act-card-image"
              />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody className="act-card-body">
                <div className="act-card-header">
                  <MDBCardTitle>Art and Craft</MDBCardTitle>
                </div>
                <MDBCardText>
                  Outshine with your creativity and learn art and craft from best out of waste.
                  Discover innovative ways to create beautiful objects from everyday materials.
                </MDBCardText>
                <button 
                  className="act-btn"
                  onClick={() => handleNavigation('/craft')}
                >
                  Explore Now
                </button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>

      {/* Footer - Remove if already in App.js */}
     
    </div>
  );
}

export default Act;