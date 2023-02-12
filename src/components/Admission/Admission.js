import './Admission.css'
import React from 'react'

function Admission() {
    return (
        <div className='admission-page'>
            <div className="admission-prodcedure">
                <h2 className="text-green">Admission Procedure and Selection</h2>
                <p>The process of admission commences after the declaration of SEE result. Tentatatively, admission session of class-XI
                    begins from second week of Shrawan.Only after the declaration of SEE result, the college brings admission schedule
                    to public notice through leading local daily Newspapers, Televisons, FMs and College page. Generally, entrance exam
                    is conducted on the 7th day of the SEE result declaration.</p>

                <p>A prospectus, nut-shell,borchure,model question of entance examp and other required information are provided at the
                    time of obtaining admission form. </p>
            </div>

            <div className="scholarship">
                <div className="scholarship-class">
                    <div className="scholarship-11">
                        <h2 className="text-green">Scholarship Scheme for Class XI</h2>

                        <p>According to the “Grade Score” of the students in SEE and the marks obtained in
                            entrance examp conducted by the college, upto 100% scholarship will be provided
                            to the students.</p>

                        <p>
                            Details for this will informed at the time of admission
                        </p>
                    </div>

                    <div className="scholarship-12">
                        <h2 className="text-green">Scholarship Plan for Class XII</h2>
                        <p>
                            Scholarship scheme mentioned above is only for class XI and the scholarship that will
                            be provided to the students in class XII depends on their scores in class XI-Second Term
                            Exam or Pre-Board  Result and details for this will be informed at the same of admission
                        </p>
                    </div>
                </div>
                <img className='scholarship-img' src="../images/class.png" alt="" />


            </div>

        </div>
    )
}

export default Admission