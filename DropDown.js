import { useState } from "react";
import RowsData from "./RowsData";
function DropDown({ datas: students }) {
  let perpagecont = 0,
    start1 = 0,
    end1 = 0;
  console.log(students);
  const [value, setValue] = useState(5);
  const clickHandler = (e) => {
    setValue(e.target.value);
    perpagecont = e.target.value;
  };
  //console.log(target.value);

  return (
    <>
      <RowsData datas={students.slice(0, value)} />
      <select id="sel" onClick={clickHandler}>
        <option defaultValue="5" value={value}>
          5
        </option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
    </>
  );
}
export default DropDown;
