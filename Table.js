import "./Table.css";
import RowsData from "./RowsData";

function Table(props) {
  return (
    <div>
      <table className="table">
        <tbody className="table-body">
          <tr className="table-data">
            <td>{props.roll}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
