import React, {useState, useEffect} from 'react'
// style
import './style/style.scss'
// icons
import view from '../../icons/view-white.svg'
import arrow_right from '../../icons/right-arrow2.svg'
import search from '../../icons/search.svg'
import back_arrow from '../../icons/left-arrow.svg'
// images
import featured_front from '../../images/featured-front.jpg'
import featured_back from '../../images/featured-back.jpg'
// widgets
import Search from '../../widgets/inputs/Search'

const Library = () => {
    const [library, setLibrary] = useState(false)
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

    return <div className="library">
        <div className="top-extras">
            <Search 
                image={search}
                type="text"
                styling="bg-white-border-black full-input"
                placeholder="Search for something..."
            />
            <b>{currentTime.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</b>
        </div>
        {library ?  <div className="library scrollable-container">
            <div className="top">
                <span onClick={() => setLibrary(false)}>
                    <img src={back_arrow} alt="back arrow" />
                    Go back to list
                </span>
            </div>
            <div className="list">
                <div className="item">
                    <img src={featured_front} alt="book" />
                    <div className="font-20">Don't Go There</div>
                    <div className="font-12">Juliana Silva</div>
                    <div className="progress-container">
                        <div className="font-8">
                            <div className="progress-line">
                                <div className="progress-line-inner bg-3"></div>
                            </div> 
                            <div>70%</div>
                        </div>
                    </div>
                </div>
                
                <div className="item">
                    <img src={featured_front} alt="book" />
                    <div className="font-20">Don't Go There</div>
                    <div className="font-12">Juliana Silva</div>
                    <div className="progress-container">
                        <div className="font-8">
                            <div className="progress-line">
                                <div className="progress-line-inner bg-3"></div>
                            </div> 
                            <div>70%</div>
                        </div>
                    </div>
                </div>
                
                <div className="item">
                    <img src={featured_front} alt="book" />
                    <div className="font-20">Don't Go There</div>
                    <div className="font-12">Juliana Silva</div>
                    <div className="progress-container">
                        <div className="font-8">
                            <div className="progress-line">
                                <div className="progress-line-inner bg-3"></div>
                            </div> 
                            <div>70%</div>
                        </div>
                    </div>
                </div>
                
                <div className="item">
                    <img src={featured_front} alt="book" />
                    <div className="font-20">Don't Go There</div>
                    <div className="font-12">Juliana Silva</div>
                    <div className="progress-container">
                        <div className="font-8">
                            <div className="progress-line">
                                <div className="progress-line-inner bg-3"></div>
                            </div> 
                            <div>70%</div>
                        </div>
                    </div>
                </div>
            
                <div className="item">
                    <img src={featured_front} alt="book" />
                    <div className="font-20">Don't Go There</div>
                    <div className="font-12">Juliana Silva</div>
                    <div className="progress-container">
                        <div className="font-8">
                            <div className="progress-line">
                                <div className="progress-line-inner bg-3"></div>
                            </div> 
                            <div>70%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> : <div className="your-library scrollable-container">
            <div className="featured">
                <div className="font-30">
                    Heather Christel:<br />
                    The Crying Book
                    <div className="font-16">
                        <div className="view">
                            <span className="bg-black">
                                <img src={view} alt="view" />
                            </span>
                        </div>
                        
                        <span>Continue Reading</span>
                    </div>
                </div>
                <div className="image-container">
                    <img 
                        src={featured_back} 
                        alt="featured back" 
                        className="img2" 
                    />
                    <img 
                        src={featured_front} 
                        alt="featured front" 
                        className="img1" 
                    />
                </div>
            </div>
            <div className="my-list">
                <div className="top">
                    <div className="font-30">My List</div>
                    <div className="font-12">
                        <span onClick={() => setLibrary(true)}>
                            View All <img src={arrow_right} alt="arrow right" />
                        </span>
                    </div>
                </div>
                <div className="books scrollable-container-2">
                    <div className="item">
                        <img src={featured_front} alt="book" />
                        <div className="font-20">Don't Go There</div>
                        <div className="font-12">Juliana Silva</div>
                        <div className="progress-container">
                            <div className="font-8">
                                <div className="progress-line">
                                    <div className="progress-line-inner bg-3"></div>
                                </div> 
                                <div>70%</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <img src={featured_front} alt="book" />
                        <div className="font-20">Don't Go There</div>
                        <div className="font-12">Juliana Silva</div>
                        <div className="progress-container">
                            <div className="font-8">
                                <div className="progress-line">
                                    <div className="progress-line-inner bg-3"></div>
                                </div> 
                                <div>70%</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <img src={featured_front} alt="book" />
                        <div className="font-20">Don't Go There</div>
                        <div className="font-12">Juliana Silva</div>
                        <div className="progress-container">
                            <div className="font-8">
                                <div className="progress-line">
                                    <div className="progress-line-inner bg-3"></div>
                                </div> 
                                <div>70%</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <img src={featured_front} alt="book" />
                        <div className="font-20">Don't Go There</div>
                        <div className="font-12">Juliana Silva</div>
                        <div className="progress-container">
                            <div className="font-8">
                                <div className="progress-line">
                                    <div className="progress-line-inner bg-3"></div>
                                </div> 
                                <div>70%</div>
                            </div>
                        </div>
                    </div>
                
                    <div className="item">
                        <img src={featured_front} alt="book" />
                        <div className="font-20">Don't Go There</div>
                        <div className="font-12">Juliana Silva</div>
                        <div className="progress-container">
                            <div className="font-8">
                                <div className="progress-line">
                                    <div className="progress-line-inner bg-3"></div>
                                </div> 
                                <div>70%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </div>
}

export default Library
