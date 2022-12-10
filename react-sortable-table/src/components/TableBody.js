import { useState } from "react";

const TableBody = ({ tableData, columns }) => {
  const [rowClicked, setrowClicked] = useState([]);
  const getclass = (data) => {
    return data ? "true" : "false";
  };
  const getrowclass = (id) => {
    rowClicked.includes(id) ? setrowClicked(rowClicked.filter(function (item) { return item != id })) : setrowClicked((prev) => [...prev, id]);
  };
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}
            // style={
            //   rowClicked.includes(data.id)
            //     ? { background: 'green' }
            //     : { background: '' }
            // }
            className={(rowClicked.includes(data.id) && "rowClick")}
            onClick={() => getrowclass(data.id)}
          >
            {columns.map(({ accessor }) => {
              var tData = data[accessor] ? data[accessor] : "——";
              accessor == 'show' ? tData == true ? tData = 'True' : tData = "False" : tData = tData;
              accessor == 'status' ? tData == true ? tData = 'True' : tData = "False" : tData = tData;
              return (accessor == 'status' ? <td key={accessor} className={getclass(data.status)}>{tData}</td> : <td key={accessor}>{tData}</td>);
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
