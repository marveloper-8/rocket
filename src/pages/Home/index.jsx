import React, {useState, useEffect} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// style
import './style/style.scss'
// icons
import logo from '../../icons/logo.svg'
// import dashboard from '../../icons/dashboard.svg'
import classroom from '../../icons/classroom.svg'
import tests from '../../icons/tests.svg'
import library from '../../icons/library.svg'
import messages from '../../icons/messages.svg'
import blogs from '../../icons/blog.svg'
import games from '../../icons/games.svg'
import settings from '../../icons/settings.svg'
import support from '../../icons/support.svg'
import notification from '../../icons/notification.svg'
import view from '../../icons/view.svg'
import arrow_right from '../../icons/right-arrow2.svg'
// illustrations
import invite from '../../illustrations/invite.png'
import champion from '../../illustrations/champion.svg'
// widgets
import Text from '../../widgets/inputs/Text'
import Button from '../../widgets/buttons/Button'
import ProgressProvider from '../../widgets/ProgressProvider'
// components
import GradePopup from './components/GradePopup'
import Classroom from '../Classroom'
import Tests from '../Tests'
import Library from '../Library'
import Messages from '../Messages'
import Blogs from '../Blogs'
import Games from '../Games'
import Settings from '../Settings'
import Support from '../Support'
// data

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [inviteFriends, setInviteFriends] = useState(true)
    const [gradePopup, setGradePopup] = useState(false)
    const [timeOpen, setTimeOpen] = useState(false)

    const [section, setSection] = useState({
        classroom: false,
        tests: false,
        library: false,
        messages: false,
        blogs: false,
        games: false,
        settings: true,
        support: false
    })

    const [timeValue, setTimeValue] = useState({
        daily: true,
        weekly: false,
        monthly: false,
        termly: false
    })
    const time = () => {
        if(timeValue.daily){
            return "Daily"
        } else if(timeValue.weekly){
            return "Weekly"
        } else if(timeValue.monthly){
            return "Monthly"
        } else if(timeValue.termly){
            return "Termly"
        }
    }

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
        clearInterval(timerID);
        };
    });
   
    function tick() {
        setCurrentTime(new Date());
    }

    const appSection = () => {
        if(section.classroom){
            return <Classroom />
        }else if(section.tests){
            return <Tests />
        }else if(section.library){
            return <Library />
        }else if(section.messages){
            return <Messages />
        }else if(section.blogs){
            return <Blogs />
        }else if(section.games){
            return <Games />
        }else if(section.settings){
            return <Settings />
        }else if(section.support){
            return <Support />
        }
    }

    return <div className="home">
        <div className="navigation-container">
            <div className="navigation-container-inner">
                <div className="container fixed-top">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="profile">
                        <div className="profile-image"></div>
                        <div className="profile-info">
                            <b>Joshua Equere</b>
                            <div className="font-10">SSS3, Science</div>
                        </div>
                    </div>
                </div>
                <div className="scrollable-container">
                    <div className="container nav-list">
                        {/* <div className="nav-item">
                            <img src={dashboard} alt="dashboard" />
                            Dashboard
                        </div> */}
                        <div className={section.classroom 
                            ? "nav-item nav-item-active" 
                            : "nav-item"
                        } onClick={() => setSection({classroom: true})}>
                            <img src={classroom} alt="classroom" />
                            Classroom
                        </div>
                        <div className={section.tests 
                            ? "nav-item nav-item-active" 
                            : "nav-item"
                        } onClick={() => setSection({tests: true})}>
                            <img src={tests} alt="tests" />
                            Tests
                        </div>
                        <div className={section.library 
                            ? "nav-item nav-item-active" 
                            : "nav-item"
                        } onClick={() => setSection({library: true})}>
                            <img src={library} alt="library" />
                            Library
                        </div>
                        <div className={section.messages 
                            ? "nav-item nav-item-active" 
                            : "nav-item"
                        } onClick={() => setSection({messages: true})}>
                            <img src={messages} alt="messages" />
                            Messages
                        </div>
                        <div className={section.blogs
                            ? "nav-item nav-item-active" 
                            : "nav-item"
                        } onClick={() => setSection({blogs: true})}>
                            <img src={blogs} alt="blogs" />
                            Blogs
                        </div>
                        <div className={section.games 
                            ? "nav-item nav-item-active" 
                            : "nav-item"
                        } onClick={() => setSection({games: true})}>
                            <img src={games} alt="games" />
                            Games
                        </div>
                    </div>
                    <div className="games-advert">
                        <div className="font-50">3,509</div>
                        <div className="font-12">students</div>
                        <div className="content bg-black">
                            <div className="name">Games</div>
                            <div className="info">Win a Macbook by playing chess</div>
                            <Button
                                text="Start a game"
                                styling="bbg-4 color-black button-2"
                            />
                        </div>
                        <div className="extras">
                            <ProgressProvider valueStart={0} valueEnd={30}>
                                {(value) => <div className="chart">
                                    <CircularProgressbar 
                                        value={value} 
                                        text={`${value}%`} 
                                        styles={{
                                            // Customize the root svg element
                                            root: {},
                                            // Customize the path, i.e. the "completed progress"
                                            path: {
                                            // Path color
                                            stroke: `#96bb7c`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#96bb7c',
                                                fontSize: '16px',
                                            },
                                            // Customize the circle behind the path, i.e. the "total progress"
                                            trail: {
                                            // Trail color
                                            stroke: '#dadada',
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                            },
                                        }}
                                    />
                                </div>}
                            </ProgressProvider>

                        </div>
                        
                    </div>
                    <div className="container nav-list">
                        <div className={section.settings 
                            ? "nav-item nav-item-active" 
                            : "nav-item"
                        } onClick={() => setSection({settings: true})}>
                            <img src={settings} alt="settings" />
                            Settings
                        </div>
                        <div className={section.support 
                            ? "nav-item nav-item-active" 
                            : "nav-item"
                        } onClick={() => setSection({support: true})}>
                            <img src={support} alt="support" />
                            Support
                        </div>
                    </div>  
                    <div className="invite">
                        <img src={invite} alt="invite" />
                        <div className="font-20">Invite Friends</div>
                        <div className="text">Invite 1 Friend and get 10% off</div>
                        <span onClick={() => setInviteFriends(true)}>
                            <Button
                                text="Invite now"
                                styling="bbg-black button-2"
                            />
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="main-container">
            {appSection()}
        </div>
        <div className={gradePopup ? "info" : "info scrollable-container"}>
            <div className="info-inner-contact top">
                <span className="notification">
                    <img src={notification} alt="notification" />
                </span>
                <b>{currentTime.toLocaleTimeString()}</b>
            </div>
            <div className="info-inner-contact">
                <div className="grid">
                    <div className="card cgpa">
                        <div className="illustration">
                            <img src={champion} alt="champion" />
                            <div className="view"><img src={view} alt={view}  onClick={() => setGradePopup(!gradePopup)} /></div>
                            
                        </div>
                        <div className="font-18">
                            <div className="label">Cummulative Grade</div>
                            <div>80%</div>
                        </div>
                        <div className="progress-line">
                            <div className="progress-line-inner bg-4"></div>
                        </div>
                        <GradePopup active={gradePopup} closePopup={() => setGradePopup(!gradePopup)} />
                    </div>
                </div>
                <div className="extras">
                    <div className="title font-20">
                        Schedule
                    </div>
                    <div className="time">
                        <span onClick={() => setTimeOpen(true)}>{time()}</span>
                        <div className={timeOpen ? "time-list" : "time-list time-list-close"}>
                            <div className={timeValue.daily 
                                ? "time-list-item time-list-item-active"
                                : "time-list-item"
                            } onClick={() => {
                                setTimeValue({daily: true})
                                setTimeOpen(false)
                            }}>
                                Daily
                            </div>
                            <div className={timeValue.weekly 
                                ? "time-list-item time-list-item-active"
                                : "time-list-item"
                            } onClick={() => {
                                setTimeValue({weekly: true})
                                setTimeOpen(false)
                            }}>
                                Weekly
                            </div>
                            <div className={timeValue.monthly 
                                ? "time-list-item time-list-item-active"
                                : "time-list-item"
                            } onClick={() => {
                                setTimeValue({monthly: true})
                                setTimeOpen(false)
                            }}>
                                Monthly
                            </div>
                            <div className={timeValue.termly 
                                ? "time-list-item time-list-item-active"
                                : "time-list-item"
                            }  onClick={() => {
                                setTimeValue({termly: true})
                                setTimeOpen(false)
                            }}>
                                Termly
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid">
                    <div className="card activities">
                        <div className="item first-item">
                            <div className="text">
                                <div className="font-20">English</div>
                                <div className="font-16">Lecture - Class</div>
                            </div>
                            <div className="arrow">
                                <img src={arrow_right} alt="arrow" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="text">
                                <div className="font-20">English</div>
                                <div className="font-16">Test - Class</div>
                            </div>
                            <div className="arrow">
                                <img src={arrow_right} alt="arrow" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="text">
                                <div className="font-20">Mathematics</div>
                                <div className="font-16">Test - Class</div>
                            </div>
                            <div className="arrow">
                                <img src={arrow_right} alt="arrow" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="text">
                                <div className="font-20">Scrabble</div>
                                <div className="font-16">Game - School</div>
                            </div>
                            <div className="arrow">
                                <img src={arrow_right} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className={inviteFriends ? "invite-friends-popup" : "invite-friends-popup invite-friends-popup-close"}>
            <div className={inviteFriends ? "popup-background" : "popup-background popup-background-close"} onClick={() => setInviteFriends(false)}></div>
            <div className="invite">
                <div className="close" onClick={() => setInviteFriends(false)}>
                    <span>&times;</span>
                </div>
                <img src={invite} alt="invite" />
                <div><b className="font-20">Invite Friends</b></div>
                <div className="text">Invite 1 Friend and get 10% off</div>
                <form>
                    <Text 
                        label="Invite via email"
                        required={true}
                        type="text"
                        styling="bg-white-border-black full-input"
                        label_styling="bg-white"
                    />
                    <Button
                        text="Send Invite"
                        type="submit"
                        styling="bbg-black full-input"
                    />
                </form>

                <div className="or">
                    <span>OR</span>
                </div>
                
                <Button
                    text="Get the link"
                    type="submit"
                    styling="bbg-black button-2 full-input"
                />
            </div>
        </div>
    </div>
}

export default Home
