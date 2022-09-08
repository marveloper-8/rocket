import React, {useState, useEffect} from 'react'
// style
import './style/style.scss'
// icons
import view from '../../icons/view.svg'
import search from '../../icons/search.svg'
import back_arrow from '../../icons/left-arrow.svg'
// widgets
import Search from '../../widgets/inputs/Search'

const Classroom = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
        clearInterval(timerID);
        };
    });
    function tick() {
        setCurrentTime(new Date());
    }

    const [status, setStatus] = useState({
        all: true,
        todays: false,
        completed: false,
        uncompleted: false
    })
    const [details, setDetails] = useState(false)
    return <div className="classroom content">
        <div className="top-extras">
            <Search 
                image={search}
                type="text"
                styling="bg-white-border-black full-input"
                placeholder="Search for something..."
            />
            <b>{currentTime.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</b>
        </div>
        <div className={details ? "section-content" : "scrollable-container section-content section-content-inner-content-open"}>
            <div className="section-content-inner">
                <div className="font-40">Classroom</div>  
                <div className="classroom-navigation font-18">
                    <div className={status.all 
                        ? "classroom-navigation-item-active classroom-navigation-item"
                        : "classroom-navigation-item"
                    } onClick={() => setStatus({
                        all: true, 
                        todays: false,
                        completed: false,
                        uncompleted: false
                    })}>
                        All
                        <div className="dot bg-black"></div>
                    </div>
                    <div className={status.todays 
                        ? "classroom-navigation-item-active classroom-navigation-item"
                        : "classroom-navigation-item"
                    } onClick={() => setStatus({
                        all: false, 
                        todays: true,
                        completed: false,
                        uncompleted: false
                    })}>
                        Today's
                        <div className="dot bg-black"></div>
                    </div>
                    <div className={status.completed 
                        ? "classroom-navigation-item-active classroom-navigation-item"
                        : "classroom-navigation-item"
                    } onClick={() => setStatus({
                        all: false, 
                        todays: false,
                        completed: true,
                        uncompleted: false
                    })}>
                        Completed
                        <div className="dot bg-black"></div>
                    </div>
                    <div className={status.uncompleted 
                        ? "classroom-navigation-item-active classroom-navigation-item"
                        : "classroom-navigation-item"
                    } onClick={() => setStatus({
                        all: false, 
                        todays: false,
                        completed: false,
                        uncompleted: true
                    })}>
                        Uncompleted
                        <div className="dot bg-black"></div>
                    </div>
                </div>  
                <div className="classroom-list">
                    <div className="classroom-list-item">
                        <div className="image"></div>
                        <div className="classroom-list-item-content">
                            <div className="head">
                                <div className="font-25">Molecules</div>
                                <div>
                                    <span className="start">Start</span> 
                                    {new Date().toLocaleDateString("en-US", {month: "short", day: "numeric"})}
                                </div>
                            </div>
                            <div className="progress-line">
                                <div className="progress-line-inner bg-4"></div>
                            </div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                            <div className="font-10">
                                <div className="tags">
                                    <span className="bg-2">Chemistry</span>
                                    <span className="bg-2">English</span>
                                </div>
                                <div className="view">
                                    <img src={view} alt="view course" onClick={() => setDetails(true)} />
                                </div>
                            </div>
                        </div>
                    </div>        
                
                    <div className="classroom-list-item">
                        <div className="image"></div>
                        <div className="classroom-list-item-content">
                            <div className="head">
                                <div className="font-25">Molecules</div>
                                <div>
                                    <span className="start">Start</span> 
                                    {new Date().toLocaleDateString("en-US", {month: "short", day: "numeric"})}
                                </div>
                            </div>
                            <div className="progress-line">
                                <div className="progress-line-inner bg-4"></div>
                            </div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                            <div className="font-10">
                                <div className="tags">
                                    <span className="bg-2">Chemistry</span>
                                    <span className="bg-2">English</span>
                                </div>
                                <div className="view">
                                    <img src={view} alt="view course" onClick={() => setDetails(true)} />
                                </div>
                            </div>
                        </div>
                    </div>        
                
                    <div className="classroom-list-item">
                        <div className="image"></div>
                        <div className="classroom-list-item-content">
                            <div className="head">
                                <div className="font-25">Molecules</div>
                                <div>
                                    <span className="start">Start</span> 
                                    {new Date().toLocaleDateString("en-US", {month: "short", day: "numeric"})}
                                </div>
                            </div>
                            <div className="progress-line">
                                <div className="progress-line-inner bg-4"></div>
                            </div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                            <div className="font-10">
                                <div className="tags">
                                    <span className="bg-2">Chemistry</span>
                                    <span className="bg-2">English</span>
                                </div>
                                <div className="view">
                                    <img src={view} alt="view course" onClick={() => setDetails(true)} />
                                </div>
                            </div>
                        </div>
                    </div>        
                
                    <div className="classroom-list-item">
                        <div className="image"></div>
                        <div className="classroom-list-item-content">
                            <div className="head">
                                <div className="font-25">Molecules</div>
                                <div>
                                    <span className="start">Start</span> 
                                    {new Date().toLocaleDateString("en-US", {month: "short", day: "numeric"})}
                                </div>
                            </div>
                            <div className="progress-line">
                                <div className="progress-line-inner bg-4"></div>
                            </div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                            <div className="font-10">
                                <div className="tags">
                                    <span className="bg-2">Chemistry</span>
                                    <span className="bg-2">English</span>
                                </div>
                                <div className="view">
                                    <img src={view} alt="view course" onClick={() => setDetails(true)} />
                                </div>
                            </div>
                        </div>
                    </div>        
                
                    <div className="classroom-list-item">
                        <div className="image"></div>
                        <div className="classroom-list-item-content">
                            <div className="head">
                                <div className="font-25">Molecules</div>
                                <div>
                                    <span className="start">Start</span> 
                                    {new Date().toLocaleDateString("en-US", {month: "short", day: "numeric"})}
                                </div>
                            </div>
                            <div className="progress-line">
                                <div className="progress-line-inner bg-4"></div>
                            </div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                            <div className="font-10">
                                <div className="tags">
                                    <span className="bg-2">Chemistry</span>
                                    <span className="bg-2">English</span>
                                </div>
                                <div className="view">
                                    <img src={view} alt="view course" onClick={() => setDetails(true)} />
                                </div>
                            </div>
                        </div>
                    </div>        
                
                    <div className="classroom-list-item">
                        <div className="image"></div>
                        <div className="classroom-list-item-content">
                            <div className="head">
                                <div className="font-25">Molecules</div>
                                <div>
                                    <span className="start">Start</span> 
                                    {new Date().toLocaleDateString("en-US", {month: "short", day: "numeric"})}
                                </div>
                            </div>
                            <div className="progress-line">
                                <div className="progress-line-inner bg-4"></div>
                            </div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                            <div className="font-10">
                                <div className="tags">
                                    <span className="bg-2">Chemistry</span>
                                    <span className="bg-2">English</span>
                                </div>
                                <div className="view">
                                    <img src={view} alt="view course" onClick={() => setDetails(true)} />
                                </div>
                            </div>
                        </div>
                    </div>        
                
                </div>
                

                <div className={details ? "classroom-content-details scrollable-container classroom-content-details-open" : "scrollable-container classroom-content-details"}>
                    <div className="top-extras-2">
                        <div className="left">
                            <img src={back_arrow} alt="go back" className="arrow" onClick={() => setDetails(false)} />
                            <Search 
                                image={search}
                                type="text"
                                styling="bg-white-border-black full-input"
                                placeholder="Search..."
                            />
                        </div>
                            
                        <audio controls autoplay>
                            <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3" type="audio/ogg" />
                            Your browser does not support the audio element.
                        </audio>
                        
                        <b>{currentTime.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</b>
                    </div>
                    <div className="classroom-content-container">
                        <div className="classroom-content-container-inner scrollable-container">
                            <div className="video"></div>
                            <div className="text">
                                <div className="tags font-10">
                                    <span className="bg-2">Chemistry</span>
                                    <span className="bg-2">English</span>
                                </div>
                                <div className="title">
                                    <div className="font-30">Molecules</div>
                                    <div className="font-20">Molecular particles in animals</div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit. Vel turpis nunc eget lorem dolor sed viverra. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Imperdiet dui accumsan sit amet. Tincidunt vitae semper quis lectus. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Bibendum ut tristique et egestas quis. Magna sit amet purus gravida. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Eget lorem dolor sed viverra ipsum nunc aliquet. Id volutpat lacus laoreet non. Ac tortor dignissim convallis aenean et tortor at risus. Auctor urna nunc id cursus metus aliquam.</p>

                                <div className="image"></div>

                                <p>Ac turpis egestas integer eget aliquet. Turpis egestas sed tempus urna et pharetra pharetra massa. Sit amet volutpat consequat mauris. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Lectus quam id leo in vitae turpis massa sed elementum. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc sed augue lacus viverra vitae.</p>
                                
                                <p>Feugiat in ante metus dictum at tempor commodo ullamcorper a. Cras pulvinar mattis nunc sed blandit libero. Id leo in vitae turpis. Aliquet sagittis id consectetur purus ut. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Urna et pharetra pharetra massa massa ultricies mi quis. Semper quis lectus nulla at. Vestibulum morbi blandit cursus risus at ultrices. Tellus molestie nunc non blandit massa enim nec dui. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Faucibus purus in massa tempor nec feugiat nisl pretium. Cras semper auctor neque vitae tempus quam pellentesque. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Volutpat blandit aliquam etiam erat. Ornare suspendisse sed nisi lacus sed. Id interdum velit laoreet id donec ultrices. Sit amet massa vitae tortor condimentum lacinia quis.</p>

                                <p>Massa tincidunt dui ut ornare lectus sit amet. Sagittis purus sit amet volutpat consequat mauris nunc. Faucibus ornare suspendisse sed nisi lacus. Etiam erat velit scelerisque in dictum non. Sollicitudin aliquam ultrices sagittis orci a. A diam maecenas sed enim ut. Porttitor eget dolor morbi non arcu risus quis. Nulla malesuada pellentesque elit eget. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Tristique senectus et netus et malesuada fames ac turpis egestas. Habitant morbi tristique senectus et netus et malesuada. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu risus quis varius quam quisque id diam vel quam. Purus ut faucibus pulvinar elementum integer enim neque volutpat.</p>

                                <div className="image"></div>

                                <p>Aliquet eget sit amet tellus cras. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Felis imperdiet proin fermentum leo vel. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Senectus et netus et malesuada. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Et sollicitudin ac orci phasellus. Lorem dolor sed viverra ipsum nunc. Ipsum dolor sit amet consectetur adipiscing. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Elementum sagittis vitae et leo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Classroom
