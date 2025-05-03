import React, { useState } from "react";
import "./career.css";

const Career = () => {
  const [activeTab, setActiveTab] = useState("explore");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const careerSections = [
    {
      id: "explore",
      title: "Explore Careers",
      content: (
        <div className="career-exploration">
          <p>
            Discover a wide range of career paths across various industries. Our comprehensive guides provide insights into job roles, required skills, and growth opportunities.
          </p>
          <div className="industry-sectors">
            <h3>Major Industry Sectors</h3>
            <div className="sectors-grid">
              {[
                "Technology & IT", 
                "Healthcare", 
                "Finance", 
                "Education", 
                "Creative Arts", 
                "Engineering", 
                "Marketing", 
                "Science & Research"
              ].map(sector => (
                <div key={sector} className="sector-card">
                  <h4>{sector}</h4>
                  <button 
                    className="explore-button"
                    onClick={() => {
                      setSelectedInterest(sector);
                      setShowRecommendations(true);
                    }}
                  >
                    Explore Careers
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "prepare",
      title: "Career Preparation",
      content: (
        <div className="career-preparation">
          <h3>Comprehensive Career Development Resources</h3>
          <div className="preparation-grid">
            <div className="prep-card">
              <h4>Resume Building</h4>
              <ul>
                <li>Professional resume templates</li>
                <li>ATS optimization techniques</li>
                <li>Keyword optimization</li>
                <li>Accomplishment statements</li>
              </ul>
            </div>
            <div className="prep-card">
              <h4>Interview Skills</h4>
              <ul>
                <li>Common interview questions</li>
                <li>Behavioral interview techniques</li>
                <li>Technical interview preparation</li>
                <li>Virtual interview tips</li>
              </ul>
            </div>
            <div className="prep-card">
              <h4>Professional Development</h4>
              <ul>
                <li>Networking strategies</li>
                <li>Personal branding</li>
                <li>Mentorship programs</li>
                <li>Continuing education</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship",
      content: (
        <div className="entrepreneurship-section">
          <h3>Startup Journey Guide</h3>
          <div className="entrepreneur-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Idea Validation</h4>
                <p>Learn how to test your business idea before investing time and money. Conduct market research, build MVPs, and gather feedback.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Business Planning</h4>
                <p>Create a comprehensive business plan covering your value proposition, target market, revenue model, and growth strategy.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Funding Options</h4>
                <p>Explore bootstrapping, angel investors, venture capital, crowdfunding, and government grants to finance your startup.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Growth Strategies</h4>
                <p>Discover marketing tactics, customer acquisition methods, and scaling techniques to grow your business sustainably.</p>
              </div>
            </div>
          </div>
          <div className="startup-resources">
            <h4>Essential Startup Resources</h4>
            <ul>
              <li>Business model canvas templates</li>
              <li>Pitch deck examples</li>
              <li>Legal requirements checklist</li>
              <li>Startup accelerator programs</li>
              <li>Co-working spaces directory</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const careerTips = [
    "Network strategically - attend industry events and connect with professionals on LinkedIn",
    "Develop both technical and soft skills - employers value well-rounded candidates",
    "Create a personal development plan with measurable career goals",
    "Build an online portfolio showcasing your work and achievements",
    "Stay updated with industry trends through newsletters and podcasts",
    "Seek feedback regularly to identify areas for improvement",
    "Consider lateral moves to gain diverse experience",
    "Maintain a healthy work-life balance for long-term success"
  ];

  const careerRecommendations = {
    "Technology & IT": [
      "Software Developer",
      "Data Scientist",
      "Cybersecurity Analyst",
      "Cloud Architect",
      "UX/UI Designer",
      "DevOps Engineer"
    ],
    "Healthcare": [
      "Physician",
      "Nurse Practitioner",
      "Medical Researcher",
      "Healthcare Administrator",
      "Physical Therapist",
      "Biomedical Engineer"
    ],
    "Finance": [
      "Financial Analyst",
      "Investment Banker",
      "Accountant",
      "Risk Manager",
      "Fintech Specialist",
      "Wealth Manager"
    ],
    "Education": [
      "Teacher/Professor",
      "Educational Consultant",
      "Curriculum Developer",
      "School Administrator",
      "Instructional Designer",
      "Education Policy Analyst"
    ],
    "Creative Arts": [
      "Graphic Designer",
      "Content Creator",
      "Art Director",
      "Film Producer",
      "Music Composer",
      "Creative Writer"
    ],
    "Engineering": [
      "Mechanical Engineer",
      "Electrical Engineer",
      "Civil Engineer",
      "Aerospace Engineer",
      "Environmental Engineer",
      "Robotics Engineer"
    ],
    "Marketing": [
      "Digital Marketing Specialist",
      "Brand Manager",
      "Market Research Analyst",
      "SEO/SEM Expert",
      "Social Media Manager",
      "Public Relations Specialist"
    ],
    "Science & Research": [
      "Research Scientist",
      "Biotechnologist",
      "Environmental Scientist",
      "Data Analyst",
      "Chemist",
      "Astrophysicist"
    ]
  };

  return (
    <div className="career-page">
      <div className="career-hero">
        <h1 className="career-title">Shape Your Future Career</h1>
        <p className="hero-subtitle">
          Discover your path, develop your skills, and achieve professional success with our comprehensive career resources
        </p>
      </div>

      <div className="career-tabs">
        {careerSections.map((section) => (
          <button
            key={section.id}
            className={`tab-button ${activeTab === section.id ? "active" : ""}`}
            onClick={() => {
              setActiveTab(section.id);
              setShowRecommendations(false);
            }}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="career-content">
        {careerSections.map((section) => (
          <div
            key={section.id}
            className={`content-section ${
              activeTab === section.id ? "active" : ""
            }`}
          >
            {section.content}
          </div>
        ))}

        {showRecommendations && selectedInterest && (
          <div className="career-recommendations">
            <h3>Recommended Careers in {selectedInterest}</h3>
            <div className="recommendations-grid">
              {careerRecommendations[selectedInterest].map((career, index) => (
                <div key={index} className="career-card">
                  <h4>{career}</h4>
                  <button className="details-button">View Details</button>
                </div>
              ))}
            </div>
            <button 
              className="back-button"
              onClick={() => setShowRecommendations(false)}
            >
              Back to Industries
            </button>
          </div>
        )}
      </div>

      <div className="career-tips-section">
        <h2>Professional Development Tips</h2>
        <div className="tips-grid">
          {careerTips.map((tip, index) => (
            <div key={index} className="tip-card">
              <div className="tip-icon">💡</div>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="entrepreneur-spotlight">
        <h2>Entrepreneur Spotlight</h2>
        <div className="entrepreneur-features">
          <div className="feature-card">
            <h3>Startup Success Stories</h3>
            <p>Learn from founders who built successful companies from scratch</p>
            <button className="feature-button">Read Stories</button>
          </div>
          <div className="feature-card">
            <h3>Funding Guide</h3>
            <p>Navigate the complex world of startup financing options</p>
            <button className="feature-button">Explore Funding</button>
          </div>
          <div className="feature-card">
            <h3>Pitch Perfect</h3>
            <p>Master the art of pitching to investors and customers</p>
            <button className="feature-button">Learn Pitching</button>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Take the Next Step in Your Career?</h2>
        <p>Join thousands of professionals who have accelerated their careers with our resources</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Get Started</button>
          <button className="cta-button secondary">Schedule Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default Career;