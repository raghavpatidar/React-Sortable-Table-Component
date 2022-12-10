import { useState } from "react";
const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    console.log(sortOrder);
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  const handleSortingChange1 = (accessor, odd) => {
    var sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";

    if (odd == 3) {
      sortOrder = "desc";
    } else if (odd == 2) {
      sortOrder = "asc";
    } else {
      sortOrder = 'def';
    }
    console.log(sortOrder);
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <>
      <thead>
        <tr>
          {columns.map(({ label, accessor, sortable }) => {
            const cl = sortable ? sortField === accessor && order === "asc" ? "up" : sortField === accessor && order === "desc" ? "down" : "default" : "";
            return (
              <th
                key={accessor}
                // onClick={sortable ? () => handleSortingChange1(accessor) : null}
                className={cl}
              >
                {
                  sortable ?
                    <div className="dropdown">
                      <button className="dropbtn"> {label}
                        <i className="fa fa-caret-down"></i>
                      </button>
                      <div className="dropdown-content">
                        <p href="" onClick={sortable ? () => handleSortingChange1(accessor, 1) : null}>Unsort</p>
                        <p href="" onClick={sortable ? () => handleSortingChange1(accessor, 2) : null}>Sort by ASC</p>
                        <p href="" onClick={sortable ? () => handleSortingChange1(accessor, 3) : null}>Sort by Desc 3</p>
                      </div>
                    </div> :
                    <div className="nodropdown">
                      {label}
                    </div>

                }


              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
