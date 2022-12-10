import { useState } from "react";

function getDefaultSorting(defaultTableData, attribute) {
  defaultTableData.map((data) => {
    return (
      data["fullname"] = data.first_name + " " + data.last_name
    );
  })
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = attribute.filter((column) => column.sortbyOrder);
    let { accessor = "id", sortbyOrder = "asc" } = Object.assign(
      {},
      ...filterColumn
    );
    if (a[accessor] === null) return 1;
    if (b[accessor] === null) return -1;
    if (a[accessor] === null && b[accessor] === null) return 0;
    const ascending = a[accessor]
      .toString()
      .localeCompare(b[accessor].toString(), "en", {
        numeric: true,
      });

    return sortbyOrder === "asc" ? ascending : -ascending;
  });
  return sorted;
}
export const useSortableTable = (data, attribute) => {
  const [tableData, setTableData] = useState(getDefaultSorting(data, attribute));
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      console.log(sortField, sortOrder);
      sortField && sortOrder == 'def' ? sortField = 'id' : sortField = sortField;
      sortOrder == 'def' ? sortOrder = 'asc' : sortOrder = sortOrder;
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  return [tableData, handleSorting];
};
