import Table from "./components/Table";
import data from "./mockdata.json";


// "id": 1,
//  "first_name": "Lonnie",
//  "last_name": "O' Connell",
//  "email": "loconnell0@hao123.com",
//  "gender": "Male",
//  "ip_address": "163.42.164.152",
//  "airport code": "OGO",
//  "time": "07-10-2022",
//  "status": true,
//  "mobile": "707-462-9538",
//  "area": "9 Coleman Trail",
//  "show": false,
//  "edit": false

const columns = [

  { label: "ID", accessor: "id", sortable: true, sortbyOrder: "asc" },
  { label: "Fist Name", accessor: "first_name", sortable: true },
  { label: "Last Name", accessor: "last_name", sortable: true },
  { label: "Full Name", accessor: "fullname", sortable: true },
  { label: "Mobile", accessor: "mobile", sortable: false },
  { label: "Email", accessor: "email", sortable: false },
  { label: "Gender", accessor: "gender", sortable: true, },
  { label: "IP", accessor: "ip_address", sortable: false },
  { label: "Time", accessor: "time", sortable: true },
  { label: "Area", accessor: "area", sortable: false },
  { label: "Status", accessor: "status", sortable: false },
  { label: "Show", accessor: "show", sortable: false },

];

const App = () => {
  return (
    <>

      <h1 style={{ textAlign: "center" }}>React Sortable Table Component</h1>
      <div className="table_container">
        <Table
          caption="Table Caption"
          data={data}
          columns={columns}
        />
      </div>
    </>
  );
};

export default App;
