import React from 'react'
import './Academy.css'
import Table from '../../Table/Table'


const list = [
    { Subject: "Comp.", Class_XI: "Nepali", Class_XII: "Nepali" },
    { Subject: "Comp.", Class_XI: "English", Class_XII: "English" },
    { Subject: "Comp.", Class_XI: "Social Studies", Class_XII: "Life Education" },
    { Subject: "Opt-1.", Class_XI: "Physics", Class_XII: "Physics" },
    { Subject: "Opt-2.", Class_XI: "Biology/Computer", Class_XII: "Biology/Computer" },
    { Subject: "Opt-3.", Class_XI: "Chemistry", Class_XII: "Chemistry" },
    { Subject: "Opt-4.", Class_XI: "Math", Class_XII: "Math" },
]

const colNames = ['Subject', 'Class-XI', 'Class-XII']


function Academy() {

    return (
        <>
            <div className="academy-programs">
                <img src="../images/collage-building.png" alt="" />

                <div className="faculty">
                    <Table list={list} colNames={colNames} />
                    <Table list={list} colNames={colNames} />
                </div>
            </div>
        </>
    )
}

export default Academy