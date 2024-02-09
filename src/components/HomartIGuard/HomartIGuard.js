import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTable } from "react-table";
import "./HomartIGuard.css";
const DataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Shift Day", accessor: "shiftDay" },
      { Header: "Shift Count", accessor: "shiftCount" },
      {
        Header: "Under Performance Count",
        accessor: (data) => data.underPerformance.length,
      },
      { Header: "Missing Shift Count", accessor: "missingShiftCount" },
      { Header: "Day of Week", accessor: "dayOfWeek" },
      { Header: "Week Type", accessor: "weekType" },
      {
        Header: "Missing Shift",
        accessor: "missingShift",
        Cell: ({ value }) => (Array.isArray(value) ? value.join(", ") : value),
      },
      {
        Header: "Under Performance",
        accessor: "underPerformance",
        Cell: ({ value }) => (Array.isArray(value) ? value.join(", ") : value),
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table {...getTableProps()} className="data-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              key={row.original.id}
              className={row.original.weekType === "Weekend" ? "weekend" : ""}
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
const HomartIGuard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.post(
          "http://localhost:3030/api/v1/homart/iguard/Time"
        );
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return <DataTable data={data} />;
};
export default HomartIGuard;
