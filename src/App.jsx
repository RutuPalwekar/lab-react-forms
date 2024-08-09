import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App(props) {

  const [students, setStudents] = useState(studentsData);
  const  [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [ program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduates, setGraduated] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduates,
    };

    setStudents([newStudent, ...students]);


    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  }
  
  

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={(e) => setImage(e.target.value)}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={(e) => setProgram(e.target.value)}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              value={graduationYear}  onChange={(e) => setGraduationYear(Number(e.target.value))}

              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" value={graduates} onChange={(e) => setGraduated(e.target.checked)} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
