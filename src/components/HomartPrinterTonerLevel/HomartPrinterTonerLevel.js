import React, { useEffect, useState } from 'react';
import './HomartPrinterTonerLevel.css';
import { getPrinterTonerLevels } from '../../services/api'; // Adjust the import path as needed

const HomartPrinterTonerLevel = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPrinterTonerLevels();
            setData(result);
        };

        fetchData();

        const intervalId = setInterval(fetchData, 600000); // Fetch data every 10 minutes

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className="table-container">
            <table className="printer-table">
                <thead>
                    <tr>
                        <th></th>
                        {data.map((printer, i) => (
                            <th key={i}>{printer.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && Object.keys(data[0]).map((property, i) => (
                        property !== 'name' && (
                            <tr key={i}>
                                <th>{property}</th>
                                {data.map((printer, j) => (
                                    <td key={j}>{printer[property]}</td>
                                ))}
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomartPrinterTonerLevel;
