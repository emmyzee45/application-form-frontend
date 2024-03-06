import React from 'react'
import axios from "axios";
import "./form.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const [input, setInput] = useState({});
    const [file, setFile] = useState('');

    const navigate = useNavigate();
  
    const handleInput = (e) => {
      const {value, name}  = e.target;
      
      setInput((prev) => {
        return {...prev, [name]: value}
      })
    }
    
    const handleSubmit = async(e) => {
      e.preventDefault();
  
      const resume = new FormData();
      resume.append("file", file);
      resume.append("name", input.name);
      resume.append("job", input.job);
      resume.append("gender", input.gender);
      resume.append("phone", input.phone);
      resume.append("birthday", input.birthday);
      resume.append("address", input.address);
      resume.append("qualification", input.qualification);
      resume.append("country", input.country);
      resume.append("city", input.city);
      
      try {
        const res = await axios.post("https://application-form-backend.onrender.com/application", resume );
        console.log(res.data)
        navigate("/success");
      }catch(err) {
        console.log(err);
      }
  
    }

  return (
    <div className='body'>
    <section className="container">
      <div className='header'>
        <img src="/richforth.jpg" className="img" />
        <h1>PROSPECTIVE ROLES PREVIEW.</h1>
      </div>
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
          <h2>1. Full-stack Developer::</h2>
          <p> - Combining both front-end and back-end development responsibilities.</p>
          <p> - Developing end-to-end web applications or services.</p>
          <p> - Managing databases, server-side logic, and user interfaces.</p>
          <p>- Collaborating with cross-functional teams throughout the development lifecycle.</p>
          <p>- Ensuring seamless integration and smooth functionality of all application components.</p>
          <p>- 5+ years of experience in web development, with a strong proficiency in HTML, CSS, Nodejs, JavaScript, and modern web frameworks like: React, Angular.</p>
        </div>
        <div>
          <h2>2. Front-end Developer:</h2>
          <p> - Implementing user interfaces using HTML, CSS, and JavaScript.</p>
          <p> - Collaborating with designers to translate visual designs into functional web pages or applications.</p>
          <p> - Optimizing web pages for performance and responsiveness.</p>
          <p> - Ensuring cross-browser compatibility and accessibility.</p>
          <p> - Integrating front-end components with back-end APIs.</p>
        </div>
        <div>
          <h2>3. Back-end Developer:</h2>
          <p>- Developing server-side logic and APIs to support web or mobile applications.</p>
          <p> - Designing and optimizing databases and data models.</p>
          <p> - Implementing security measures and data protection.</p>
          <p> - Integrating external systems and services.</p>
          <p> - Conducting testing and debugging of server-side applications.</p>
          <p>- 5+ years of experience in web development, with a strong proficiency in Node and Express</p>
          <p> - Solid understanding of server-side programming languages, such as PHP, Python, or Java, and experience with RESTful API design and development.</p>
          <p> - Proficiency in database design and management, including relational databases : MySQL, PostgreSQL and NoSQL databases </p>
        </div>
        <div>
          <h2>4. UX/UI Designer:</h2>
          <p>- Conducting user research and creating user personas.</p>
          <p>- Designing user interfaces that are visually appealing, intuitive, and user-friendly.</p>
          <p> - Creating wireframes, prototypes, and mockups to communicate design ideas.</p>
          <p> - Collaborating with developers to ensure the feasibility of design concepts.</p>
          <p> - Conducting usability testing and incorporating user feedback into the design.</p>
        </div>
        <div>
          <h2>5. Data Scientist:</h2>
          <p>- Analyzing complex data sets to identify patterns, trends, and insights.</p>
          <p>- Developing and implementing machine learning models and algorithms.</p>
          <p> - Building predictive models and data visualizations.</p>
          <p> - Collaborating with stakeholders to define data requirements and use cases.</p>
          <p> - Presenting findings and recommendations to non-technical stakeholders.</p>
        </div>
        <div>
          <h2>6. DevOps Engineer & Project Managers:</h2>
          <p>- Automating and streamlining software development processes.</p>
          <p>- Managing and configuring infrastructure, servers, and cloud services.</p>
          <p>- Implementing continuous integration and deployment pipelines.</p>
          <p>- Monitoring system performance and ensuring high availability.</p>
          <p>- Troubleshooting and resolving infrastructure-related issues.</p>
        </div>
      </div>
      <form action="#" className="form" onSubmit={handleSubmit}>
      <div className="input-box">
        <label>Full Name</label>
        <input type="text" onChange={handleInput} name='name' placeholder="Enter full name" required />
      </div>
      <div className="input-box">
        <label>Email Address</label>
        <input type="text" onChange={handleInput} name='email' placeholder="Enter email address" required />
      </div>
      
        <div className="input-box">
          <label>Phone Number</label>
          <input type="number" onChange={handleInput} name='phone' placeholder="Enter phone number" required />
        </div>
        <div className="input-box">
          <label>Birth Date</label>
          <input type="date" onChange={handleInput} name='birthday' placeholder="Enter birth date" required />
        </div>
      <div className="gender-box">
        <h3>Gender</h3>
        <div className="gender-option">
          <div className="gender">
            <input type="radio" id="check-male" onChange={handleInput} name="gender" value="male" required />
            <label for="check-male">male</label>
          </div>
          <div className="gender">
            <input type="radio" id="check-female" onChange={handleInput} name="gender" value='female' required />
            <label for="check-female">Female</label>
          </div>
          <div className="gender">
            <input type="radio" id="check-other" onChange={handleInput} name="gender" value="unKnown" required/>
            <label for="check-other">prefer not to say</label>
          </div>
        </div>
      </div>
      <div className="input-box address">
        <label>Address</label>
        <input type="text" onChange={handleInput} name='address' placeholder="Enter street address" required />
        <div className="column">
          <input type="text" onChange={handleInput} name='country' placeholder="Country" required />
          <input type="text" onChange={handleInput} name='city' placeholder="City" required />
        </div>
        <div className="input-box">
          <label>Highest Qualification</label><br />
          <select className="select-box" onChange={handleInput} name="qualification" required>
            <option value="">Select Qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="other">Others</option>
          </select>
        </div>
        <div className="input-box">
          <label>Job Aplying For</label>
          <select className="select-box" onChange={handleInput} name="job" required>
            <option value="">Select Job</option>
            <option value="Front-end Developer">Front-end Developer</option>
            <option value="Back-end Developer">Back-end Developer</option>
            <option value="Full-stack" Developer>Full-stack Developer</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Project Manager">Project Manager</option>
          </select>
        </div>
        <div className="input-box">
          <label>Upload Resume</label><br />
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} accept=".pdf,.doc,.docx" required />
        </div>
      </div>
      <button>Submit</button>
    </form>
  </div>
  </section>
  </div>
  )
}
