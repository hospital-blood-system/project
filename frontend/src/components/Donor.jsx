import React from 'react';
import Dashboard from './Dasboard'
import { useTable } from 'react-table';

const Donor = () => {
  // Veri örnekleri
  const data = React.useMemo(
    () => [
      { firstName: 'John', lastName: 'Doe', age: 25 },
      { firstName: 'Jane', lastName: 'Doe', age: 30 },
      { firstName: 'Bob', lastName: 'Smith', age: 22 },
    ],
    []
  );

  // Sütun örnekleri
  const columns = React.useMemo(
    () => [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Age', accessor: 'age' },
    ],
    []
  );

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
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
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
