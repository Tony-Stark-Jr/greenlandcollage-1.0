import React from 'react'
import './Table.css'


function Table({ list, colNames }) {
    return (
        <>
           

            <div className='full-table'>
            <h2>Science</h2>
                {
                    list.length > 0 && (
                        <table className='table' cellSpacing='0'>

                            <thead>
                                <tr className='table-row'>
                                    {colNames.map((headerItem, index) => (
                                        <th className='table-head-data' key={index}>
                                            {headerItem.toUpperCase()}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className='table-body'>
                                {Object.values(list).map((obj, index) => (
                                    <tr className='table-row' key={index}>
                                        {Object.values(obj).map((value, index2) => (
                                            <td className='table-data' key={index2}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    )
                }

            </div>
        </>
    )
}

export default Table