import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import RowsData from "./components/RowsData";
import MyButton from "./components/MyButton";
import DropDown from "./components/DropDown";
import { useState } from "react";
function App() {
  let start = 0,
    end = 5;

  const [currentPage, setCurrentPage] = useState();

  const students = [
    { rollno: 1, name: "Paras", email: "pj849610@gmail.com" },
    {
      rollno: 2,
      name: "Udit",
      email: "UD849610@gmail.com",
    },
    {
      rollno: 3,
      name: "PQR",
      email: "PQR849610@gmail.com",
    },
    {
      rollno: 4,
      name: "XYZ",
      email: "XYZ849610@gmail.com",
    },
    {
      rollno: 5,
      name: "BNM",
      email: "BNM849610@gmail.com",
    },
    {
      rollno: 6,
      name: "LKJ",
      email: "LKJ849610@gmail.com",
    },
    {
      rollno: 7,
      name: "TYU",
      email: "TYU849610@gmail.com",
    },
    {
      rollno: 8,
      name: "ZXC",
      email: "ZXC849610@gmail.com",
    },
    {
      rollno: 9,
      name: "POI",
      email: "POI849610@gmail.com",
    },
    {
      rollno: 10,
      name: "FGH",
      email: "FGH849610@gmail.com",
    },
    {
      rollno: 11,
      name: "SDF",
      email: "SDF849610@gmail.com",
    },
    {
      rollno: 12,
      name: "RTE",
      email: "RTE849610@gmail.com",
    },
    {
      rollno: 13,
      name: "ASD",
      email: "ASD849610@gmail.com",
    },
    {
      rollno: 14,
      name: "YUT",
      email: "YUT849610@gmail.com",
    },
    {
      rollno: 15,
      name: "WSD",
      email: "WSD849610@gmail.com",
    },
    {
      rollno: 16,
      name: "JBF",
      email: "JBF849610@gmail.com",
    },
    {
      rollno: 17,
      name: "HVR",
      email: "HVR849610@gmail.com",
    },
    {
      rollno: 18,
      name: "ETR",
      email: "ETR849610@gmail.com",
    },
    {
      rollno: 19,
      name: "CDA",
      email: "CDA849610@gmail.com",
    },
    {
      rollno: 20,
      name: "UNT",
      email: "UNT849610@gmail.com",
    },
  ]; // array of objects

  const handleFirst = (value) => {
    setCurrentPage(1);
  };
  const handlePrev = () => {
    if (currentPage != 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    console.log("next");
    if (currentPage) setCurrentPage(currentPage + 1);
  };
  const handleLast = () => setCurrentPage(students.length);

  const handleNextClick = () => {};
  return (
    <div className="App">
      <div className="myTable">
        <table className="table">
          <thead className="table-head">
            <tr className="table-data">
              <th>Roll no</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
        </table>
      </div>
      <DropDown datas={students}></DropDown>
      <MyButton
        name="First"
        currentPage={currentPage}
        handleClick={handleFirst}
      ></MyButton>

      <MyButton
        name="prev"
        currentPage={currentPage}
        handleClick={handlePrev}
      ></MyButton>
      <output id="currentPage1">{currentPage}</output>
      <MyButton
        name="next"
        currentPage={currentPage}
        handleClick={handleNext}
      ></MyButton>
      <MyButton
        name="last"
        currentPage={currentPage}
        handleClick={handleLast}
      ></MyButton>
    </div>
  );
}

export default App;
