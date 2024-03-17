import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Hero from "../hero/hero";

const JobDescription = ({ title, isOpen, toggleOpen, children }) => (
  <div>
    <div className="content">
      <h5 className="job-title">{title}</h5>
      <div className="view" onClick={toggleOpen}>
        {isOpen ? "-" : "+"}
      </div>
    </div>
    {isOpen && <div className="viewContent">{children}</div>}
  </div>
);

const Home = () => {
  const [open, setOpen] = useState(false);
  const [openBackend, setOpenBackend] = useState(false);
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openUI, setOpenUI] = useState(false);
  const [openDevOps, setOpenDevOps] = useState(false);
  const [openDatascience, setOpenDataScience] = useState(false);

  const toggleView = () => setOpen(!open);
  const toggleFrontend = () => setOpenFrontend(!openFrontend);
  const toggleBackend = () => setOpenBackend(!openBackend);
  const toggleUI = () => setOpenUI(!openUI);
  const toggleDatascience = () => setOpenDataScience(!openDatascience);
  const toggleDevOps = () => setOpenDevOps(!openDevOps);

  return (
    <div>
      <Hero />
      <div className="home-container">
        <div className="lead-text">
          <p>
            We are delighted to announce that RICHFORTH Ltd, a renowned company
            specializing in property legalizations and compliance services and
            consultancies, is pleased to collaborate with the esteemed IT
            department of GIKIHUBS GROUP.
          </p>

          <p>
            This exciting partnership aims to open up new avenues for
            technological expertise within our organization. We always recognize
            the importance of incorporating new technology into our operations
            for enhanced efficiency and service delivery. Application Period:
            The application window will be open from the 11TH of March 2024 to
            the 30th of March 2024. Please submit your application within this
            timeframe.
          </p>

          <p>
            To apply, carefully review the role descriptions and ensure
            eligibility. Submit your application through the provided online
            form, including a comprehensive resume/CV and any required
            documents. We value diversity and equal opportunity, encouraging
            candidates from all backgrounds to apply. All information shared
            will be treated confidentially.
          </p>

          <p>
            After you submit your application, our dedicated recruitment team
            will thoroughly review all applications and return correspondences
            through your email address we have in our file. We look forward to
            receiving your applications. Should you have any further inquiries
            or require additional information, please reach out to our HR
            department through email at sales@richforthstore.com.
          </p>
        </div>

        <h4>PROSPECTIVE ROLES PREVIEW</h4>
        <div className="inner-container">
          <div>
            <JobDescription
              title="Full-stack Developer"
              isOpen={open}
              toggleOpen={toggleView}
            >
              <p>
                - Combining both front-end and back-end development
                responsibilities.
              </p>
              <p>- Developing end-to-end web applications or services.</p>
              <p>
                - Managing databases, server-side logic, and user interfaces.
              </p>
              <p>
                - Collaborating with cross-functional teams throughout the
                development lifecycle.
              </p>
              <p>
                - Ensuring seamless integration and smooth functionality of all
                application components.
              </p>
              <p>
                - 5+ years of experience in web development, with a strong
                proficiency in HTML, CSS, Nodejs, JavaScript, and modern web
                frameworks like: React, Angular.
              </p>
            </JobDescription>

            <JobDescription
              title="Front-end Developer"
              isOpen={openFrontend}
              toggleOpen={toggleFrontend}
            >
              <p>
                - Implementing user interfaces using HTML, CSS, and JavaScript.
              </p>
              <p>
                - Collaborating with designers to translate visual designs into
                functional web pages or applications.
              </p>
              <p>- Optimizing web pages for performance and responsiveness.</p>
              <p>- Ensuring cross-browser compatibility and accessibility.</p>
              <p>- Integrating front-end components with back-end APIs.</p>
            </JobDescription>

            <JobDescription
              title="Back-end Developer"
              isOpen={openBackend}
              toggleOpen={toggleBackend}
            >
              <p>
                - Developing server-side logic and APIs to support web or mobile
                applications.
              </p>
              <p>- Designing and optimizing databases and data models.</p>
              <p>- Implementing security measures and data protection.</p>
              <p>- Integrating external systems and services.</p>
              <p>
                - Conducting testing and debugging of server-side applications.
              </p>
              <p>
                - 5+ years of experience in web development, with a strong
                proficiency in Node and Express
              </p>
              <p>
                - Solid understanding of server-side programming languages, such
                as PHP, Python, or Java, and experience with RESTful API design
                and development.
              </p>
              <p>
                - Proficiency in database design and management, including
                relational databases: MySQL, PostgreSQL and NoSQL databases
              </p>
            </JobDescription>

            <JobDescription
              title="UX/UI Designer"
              isOpen={openUI}
              toggleOpen={toggleUI}
            >
              <p>- Conducting user research and creating user personas.</p>
              <p>
                - Designing user interfaces that are visually appealing,
                intuitive, and user-friendly.
              </p>
              <p>
                {" "}
                - Creating wireframes, prototypes, and mockups to communicate
                design ideas.
              </p>
              <p>
                {" "}
                - Collaborating with developers to ensure the feasibility of
                design concepts.
              </p>
              <p>
                {" "}
                - Conducting usability testing and incorporating user feedback
                into the design.
              </p>
            </JobDescription>

            <JobDescription
              title="Data Scientist"
              isOpen={openDatascience}
              toggleOpen={toggleDatascience}
            >
              <p>
                - Analyzing complex data sets to identify patterns, trends, and
                insights.
              </p>
              <p>
                - Developing and implementing machine learning models and
                algorithms.
              </p>
              <p> - Building predictive models and data visualizations.</p>
              <p>
                {" "}
                - Collaborating with stakeholders to define data requirements
                and use cases.
              </p>
              <p>
                {" "}
                - Presenting findings and recommendations to non-technical
                stakeholders.
              </p>
            </JobDescription>

            <JobDescription
              title="DevOps Engineer & Project Managers"
              isOpen={openDevOps}
              toggleOpen={toggleDevOps}
            >
              <p>
                - Automating and streamlining software development processes.
              </p>
              <p>
                - Managing and configuring infrastructure, servers, and cloud
                services.
              </p>
              <p>
                - Implementing continuous integration and deployment pipelines.
              </p>
              <p>
                {" "}
                - Monitoring system performance and ensuring high availability.
              </p>
              <p>
                - Troubleshooting and resolving infrastructure-related issues.
              </p>
            </JobDescription>

            <Link to="/application">
              <button className="apply">Apply Now!!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
