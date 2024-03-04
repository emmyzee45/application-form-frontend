import './App.css';
import axios from "axios";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({});
  const [file, setFile] = useState('');

  
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
      const res = await axios.post("http://localhost:5000/application", resume );
      console.log(res.data)
    }catch(err) {
      console.log(err);
    }

  }

  return (
    <section className="container">
      <img src="/richforth.jpg" className="img" />
      <div className="inner-container">
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
  );
}

export default App;
