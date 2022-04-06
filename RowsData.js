import Table from "./Table";
import DropDown from "./DropDown";
function RowsData({ datas }) {
  console.log("asassdad", datas);
  return (
    <div className="rows">
      {datas.map((elem) => (
        <Table
          key={Math.random().toString()}
          roll={elem.rollno}
          name={elem.name}
          email={elem.email}
        ></Table>
      ))}
    </div>
  );
}
export default RowsData;
