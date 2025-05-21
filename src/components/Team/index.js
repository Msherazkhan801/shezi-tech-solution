import React from 'react'
import styles from "./Team.module.css";
import teamData from '../../TeamData';
import { Link } from 'react-router-dom';

const Team = () => {


  return (
    <div className={styles.teamWrapper}>
        <div className={`pageTopSection ${styles.teamTop}`}>
            <div className='container'>
                <h1 className={styles.heading}>People are the key to <span>success</span></h1>
                {/* <p className={styles.textTop}>We are talented creatives that take business seriously.</p> */}
                <p className={styles.textTop}>We Launch, Manage, and Customize All Your Web-development Needs.</p>
            </div> 
        </div>
        <div className={styles.ceoMessageWrapper}>
            <div className='container'>
                <div className={styles.ceoMessage}>
                    <div className={styles.ceoImage}>
                        <img src='assets/images/team/ceo.png' alt='ceo' />
                    </div>
                    <div className={styles.ceoText}>
                        <h3>Message from our ceo</h3>
                        <p>
                        “I laid the strong foundation of SheziTechSolution with the optimized idea of a well-crafted integrated digital agency that is obsessed for good. I have been able to develop a team who is capable of blending smart technology, advanced content strategy, and inspiring designs for web development. SheziTechSolution is headed to soar by adapting the smartest system to stand out in the market. It is important to know what’s working so you can embark on success.” 
                        </p>
                        <div className={styles.ceoName}>
                            <h4>Afzal khan</h4>
                            <p className={styles.designation}>ceo & co founder</p>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>
        <div className={styles.teamSection}>
            <div className='container'>
                <h2 className='text-center'>Meet The <span className='text-orange'>Team</span></h2>
                <div className='row flex-wrap'>
                    {
                        teamData.map((team,index)=>{
                            return(
                            <div className='col-md-4 col-lg-3 col-6' key={index}>
                                <div className={styles.teamMember}>
                                    <div className={styles.image}>
                                        <img src='/assets/images/team/team-member.png' alt='team-member' />
                                    </div>
                                    <div className={styles.teamMemberInfo}>
                                        <h4>
                                        {team.name}
                                        </h4>
                                        <p>
                                        {team.designation}
                                        </p>
                                        <a href='linkedin.com'><img src='/assets/images/team/linkedin.png' alt='linked-in' /></a>
                                    </div>
                                </div>
                            </div>   
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className={styles.teamFamilyWrapper}>
            <div className={styles.teamFamily}>
                <div className='container'>
                    <div className={styles.teamFamilyText}>
                        <h3>
                            We’re more than an agency, 
                            we’re family.
                        </h3>
                        <p>
                            When you walk into the Leeroy offices, there is a positive vibe in the air: that is the aura of our team working as one. We bring out of the best in each other and we use our talents to shape the beautiful projects that you entrust to us.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.followAgency}>
            <div className='container'>
                <div className={styles.agency}>    
                    <h3>Follow the agency life
                        on social media</h3>
                    <ul className={styles.sociaList}>
                        <li>
                            <a href="https://www.linkedin.com/company/web-sailors/" >Linkedin</a> 
                        </li>
                        <li>
                            <Link to="linkedin.com" >Facebook</Link> 
                        </li>
                        <li>
                            <Link to="linkedin.com" >Instagram</Link> 
                        </li>
                        <li>
                            <a href="https://twitter.com/SheziTechSolution1" >twitter</a> 
                        </li>
                    </ul>  
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Team