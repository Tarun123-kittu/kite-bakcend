import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import { Link , useNavigate} from "react-router-dom";
import "./style.css";
import Updateuser from "./updateuser";


const removeItem = (array, item) => {
  const newArray = array.slice();
  newArray.splice(newArray.findIndex(a => a === item), 1);

  return newArray;
};

const AdvancedPaginationTable = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [deleted, setDeleted] = useState([]);

  const fetchUsers = async (page, size = perPage) => {
    setLoading(true);

    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}v1/get-users?page=${page}&per_page=${size}`,{headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }}
    );

    setData(response.data.data.data);
    setTotalRows(response.data.data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(1);
  
  }, []);

  const handleDelete = useCallback(
    row => async () => {
      await axios.get(`${process.env.REACT_APP_BASE_URL}v1/user/delete/${row.id}`,{headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }}).then((response)=>{
        setData(removeItem(data, row));
        setTotalRows(totalRows - 1);
      });
     
    },
    [currentPage, perPage, totalRows]
  );

  const columns = useMemo(
    () => [
      {
        name: "First Name",
        selector: row => row.first_name,
        sortable: true
      },
      {
        name: "Last Name",
        selector: row => row.last_name,
        sortable: true
      },
      {
        name: "Email",
        selector: row => row.email,
        sortable: true
      },
      {
        name: "Company",
        selector: row => row.company,
        sortable: true
      },
      {
        
        cell: row =>  (
          <>
            <button
              onClick={()=>{ navigation(`/updateUser/${row.id}`) }}
              style={{ marginRight: "5px" }}
            >
              Edit
            </button>
            <button onClick={handleDelete(row)}>Delete</button>
          </>
        ) 
        // cell: row => <button onClick={handleDelete(row)}>Delete</button>
      }
    ],
    [handleDelete]
  );

  const handlePageChange = page => {
    fetchUsers(page);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchUsers(page, newPerPage);
    setPerPage(newPerPage);
  };

  return (
    <DataTable
      title="Users"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      paginationDefaultPage={currentPage}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      // selectableRows
      // onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
    />
  );
};

export default function App() {
  return (
  <div className="content_outer">
    <div className="content">
    <div className="App">
    <Link className="btn btn-outline-success add_user" to="/addUser">Add User</Link>
    <AdvancedPaginationTable />
    </div>
    </div>
  </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
