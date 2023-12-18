import React, { useState, useEffect } from 'react';
import Dashboard from './Dasboard'
import { useTable } from 'react-table';
import axios from 'axios';

const Donor = () => {
  const [data, setData] = useState([]);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: '_id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Surname', accessor: 'surname' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'Gender', accessor: 'male' },
      { Header: 'Blood Type', accessor: 'blood' },
    ],
    []
  );

  useEffect(() => {
    getDonors();
  }, []);

  const getDonors = async () => {
    try {
      const response = await axios.get('http://localhost:8003/api/donors');
      const indexedData = response.data.map((donor) => ({
        _id: donor._id,
        name: donor.name,
        surname: donor.surname,
        age: donor.age,
        male: donor.male ? 'Male' : 'Female',
        blood: donor.blood,
      }));
      setData(indexedData);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Dashboard>
      <div className="container my-5 p-4 rounded border shadow">
        <h3 className="display-5 fw-bold text-primary text-center mb-4">Donor Listesi</h3>
        <table {...getTableProps()} className="table table-bordered table-striped">
          <thead className="table-primary">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default Donor;
