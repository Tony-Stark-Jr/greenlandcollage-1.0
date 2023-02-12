import './Home.css'
import React from 'react'

function Home() {
    return (
        <>
            <div className='main'>
                <div className="principal-message">
                    <div className="principal">

                        <img className="principal-img" src="../images/principal-image.png" alt="" />

                        <div className="caption">
                            <h3 className='text-green'>Dipak Pokharel</h3>
                            <p>Director/Principal</p>
                        </div>
                    </div>
                    <div className="welcome-message">
                        <h2 className="text-green">Welcome Message</h2>
                        <p>Dear parents and prospective students,</p>
                        <br />
                        <p>Welcome to Greenland International Higher Secondary School, one of the premier +2 colleges
                            in Nepal. The college is imparting +2 programmes in four different streams : Science, Computer
                            Science, Management & Hotel Management.</p>

                        <br />
                        <p>Choosing a +2 college, after SEE, is one of the most important decision that you will ever
                            make. We want you to base your choice of a college on relevant and reliable informations.
                            Greenland College is applying its best effort to improve the academic ambiance. The long
                            experienced managing administrators, incredible team of directors, radical academic
                            vision, excellent intellectual support, conductive and disciplined environment, social mission, team
                            entrepreneurship and stimulating atmosphere in the college would enable students to dream &
                            work hard to achieve their goal.</p>
                    </div>
                </div>
                <div className="team">
                    <iframe src="https://www.youtube.com/embed/ddzB8xkD_-I" title="Dipak Pokharel, Greenland College" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <img src="./images/team-photo.png" alt="greenland-teacher-team" />
                </div>


            </div>
        </>
    )
}

export default Home