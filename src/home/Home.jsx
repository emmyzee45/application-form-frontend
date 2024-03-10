import React, { useState } from 'react'
import "./home.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openBackend, setOpenBackend] = useState(false);
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openUI, setOpenUI] = useState(false);
  const [openDevOps, setOpenDevOps] = useState(false);
  const [openDatascience, setOpenDataScience] = useState(false);

  const handleView = () => {
    setOpen(!open);
  }

  const handleFrontend = () => {
    setOpenFrontend(!openFrontend)
  }

  const handleBackend = () => {
    setOpenBackend(!openBackend)
  }
  const handleUI = () => {
    setOpenUI(!openUI)
  }

  const handleDatascience = () => {
    setOpenDataScience(!openDatascience)
  }

  const handleDevOps = () => {
    setOpenDevOps(!openDevOps)
  }
  return (
    <div className='home-container'>
      <h1>OPen Roles At Richforth Ltd</h1>
      <div>
        We are delighted to announce that RICHFORTH Ltd, a renowned company specializing in property legalizations and compliance services and consultancies, is pleased to collaborate with the esteemed IT department of GIKIHUBS GROUP. This exciting partnership aims to open up new avenues for technological expertise within our organization.
        we always recognize the importance of incorporating new technology into our operations for enhanced efficiency and service delivery.

        Application Period: The application window will be open from the 11TH of March 2024 to the 30th of March 2024. Please submit your application within this timeframe.

        To apply, carefully review the role descriptions and ensure eligibility. Submit your application through the provided online form, including a comprehensive resume/CV and any required documents.

        We value diversity and equal opportunity, encouraging candidates from all backgrounds to apply. All information shared will be treated confidentially.

        After you submit your application, our dedicated recruitment team will thoroughly review all applications and return correspondences through your  email address we have in our file.  

        We look forward to receiving your applications. Should you have any further inquiries or require additional information, please reach out to our HR department. through email at sales@richforthstore.com
      </div>
      <h4>PROSPECTIVE ROLES PREVIEW</h4>
      <div className="inner-container">
      <div>
        {/* <div>
          <h2>1. Software Engineer/Developer:</h2>
          <p> - Designing, coding, and testing software applications based on given requirements.</p>
          <p> - Collaborating with cross-functional teams to develop and maintain software systems.</p>
          <p> - Troubleshooting and debugging software issues.</p>
          <p>- Writing clean, efficient, and maintainable code.</p>
          <p>- Keeping up with emerging technologies and industry trends.</p>
        </div> */}
        <div>
          <div className='content'>
          <h5 className='job-title'>Full-stack Developer:</h5>
          {!open ? (

            <div className='view' onClick={handleView}>
              +
            </div>
          ): (
            <div className='view' onClick={handleView}>
              -
            </div>
          )}
          </div>
          {open && (
            <div className='viewContent'>
              <p> - Combining both front-end and back-end development responsibilities.</p>
              <p> - Developing end-to-end web applications or services.</p>
              <p> - Managing databases, server-side logic, and user interfaces.</p>
              <p>- Collaborating with cross-functional teams throughout the development lifecycle.</p>
              <p>- Ensuring seamless integration and smooth functionality of all application components.</p>
              <p>- 5+ years of experience in web development, with a strong proficiency in HTML, CSS, Nodejs, JavaScript, and modern web frameworks like: React, Angular.</p>
            </div>
          )}
        </div>
        <div>
          <div className='content'>
          <h5 className='job-title'>Front-end Developer:</h5>
          {!openFrontend ? (
            <div className='view' onClick={handleFrontend}>
              +
            </div>
            ): (
            <div className='view' onClick={handleFrontend}>
              -
            </div>
            )}
          </div>
          {openFrontend && (
          <div className='viewContent'>
            <p> - Implementing user interfaces using HTML, CSS, and JavaScript.</p>
            <p> - Collaborating with designers to translate visual designs into functional web pages or applications.</p>
            <p> - Optimizing web pages for performance and responsiveness.</p>
            <p> - Ensuring cross-browser compatibility and accessibility.</p>
            <p> - Integrating front-end components with back-end APIs.</p>
          </div>
          )}
        </div>
        <div>
          <div className='content'>
          <h5 className='job-title'>Back-end Developer:</h5>
            {!openBackend ? (
              <div className='view' onClick={handleBackend}>
                +
              </div>
              ): (
              <div className='view' onClick={handleBackend}>
                -
              </div>
            )}
          </div>
          {openBackend && (
            <div className='viewContent'>
            <p>- Developing server-side logic and APIs to support web or mobile applications.</p>
            <p> - Designing and optimizing databases and data models.</p>
            <p> - Implementing security measures and data protection.</p>
            <p> - Integrating external systems and services.</p>
            <p> - Conducting testing and debugging of server-side applications.</p>
            <p>- 5+ years of experience in web development, with a strong proficiency in Node and Express</p>
            <p> - Solid understanding of server-side programming languages, such as PHP, Python, or Java, and experience with RESTful API design and development.</p>
            <p> - Proficiency in database design and management, including relational databases : MySQL, PostgreSQL and NoSQL databases </p>
          </div>
          )}
        </div>
        <div>
          <div className='content'>
            <h5 className='job-title'>UX/UI Designer:</h5>
            {!openUI ? (
              <div className='view' onClick={handleUI}>
                +
              </div>
              ): (
              <div className='view' onClick={handleUI}>
                -
              </div>
            )}
          </div>
          {openUI && (
            <div className='viewContent'>
            <p>- Conducting user research and creating user personas.</p>
            <p>- Designing user interfaces that are visually appealing, intuitive, and user-friendly.</p>
            <p> - Creating wireframes, prototypes, and mockups to communicate design ideas.</p>
            <p> - Collaborating with developers to ensure the feasibility of design concepts.</p>
            <p> - Conducting usability testing and incorporating user feedback into the design.</p>
          </div>
          )}
        </div>
        <div>
          <div  className='content'>    
            <h5 className='job-title'>Data Scientist:</h5>
            {!openDatascience ? (
              <div className='view' onClick={handleDatascience}>
                +
              </div>
              ): (
              <div className='view' onClick={handleDatascience}>
                -
              </div>
            )}
          </div>
          {openDatascience && (
            <div className='viewContent'>            
            <p>- Analyzing complex data sets to identify patterns, trends, and insights.</p>
            <p>- Developing and implementing machine learning models and algorithms.</p>
            <p> - Building predictive models and data visualizations.</p>
            <p> - Collaborating with stakeholders to define data requirements and use cases.</p>
            <p> - Presenting findings and recommendations to non-technical stakeholders.</p>
          </div>
          )}
        </div>
        <div>
          <div className='content'>           
          <h5 className='job-title'>DevOps Engineer & Project Managers:</h5>
          {!openDevOps ? (
              <div className='view' onClick={handleDevOps}>
                +
              </div>
              ): (
              <div className='view' onClick={handleDevOps}>
                -
              </div>
            )}
          </div>
          {openDevOps && (
            <div className='viewContent'>          
            <p>- Automating and streamlining software development processes.</p>
            <p>- Managing and configuring infrastructure, servers, and cloud services.</p>
            <p>- Implementing continuous integration and deployment pipelines.</p>
            <p>- Monitoring system performance and ensuring high availability.</p>
            <p>- Troubleshooting and resolving infrastructure-related issues.</p>
          </div>
          )}
        </div>
        <a href='/application-form'>
          <button className='apply'>Apply Now!!</button>
        </a>
      </div>
    </div>
    </div>
  )
}
