import React, {useState, useEffect} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
// style
import './style/style.scss'
// icons
import search from '../../icons/search.svg'
import back_arrow from '../../icons/left-arrow.svg'
import arrow_right from '../../icons/right-arrow2.svg'
// widgets
import Search from '../../widgets/inputs/Search'
import Button from '../../widgets/buttons/Button'
import ProgressProvider from '../../widgets/ProgressProvider'

const Tests = () => {
    const [section, setSection] = useState("all")
    const [details, setDetails] = useState("none")
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

    const appSection = () => {
        if(section === "all"){
            return <div className="section-content-inner">
                <div className="font-40">Tests</div> 
                <section>
                    <div className="top">
                        <div className="font-20">Pending Exercises</div>
                        <div className="font-12">
                            <span onClick={() => setSection("tests")}>
                                View All <img src={arrow_right} alt="arrow right" />
                            </span>
                        </div>
                    </div>
                    <div className="tests-list scrollable-container-2">
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">EXERCISE</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">EXERCISE</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">EXERCISE</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section>
                    <div className="top">
                        <div className="font-20">Pending Assignments</div>
                        <div className="font-12">
                            <span onClick={() => setSection("tests")}>
                                View All <img src={arrow_right} alt="arrow right" />
                            </span>
                        </div>
                    </div>
                    <div className="tests-list scrollable-container-2">
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">ASSIGNMENT</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">ASSIGNMENT</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">ASSIGNMENT</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section>
                    <div className="top">
                        <div className="font-20">Pending Quizzes</div>
                        <div className="font-12">
                            <span onClick={() => setSection("tests")}>
                                View All <img src={arrow_right} alt="arrow right" />
                            </span>
                        </div>
                    </div>
                    <div className="tests-list scrollable-container-2">
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">QUIZZES</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">QUIZZES</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">QUIZZES</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section>
                    <div className="top">
                        <div className="font-20">Pending Tests</div>
                        <div className="font-12">
                            <span onClick={() => setSection("tests")}>
                                View All <img src={arrow_right} alt="arrow right" />
                            </span>
                        </div>
                    </div>
                    <div className="tests-list scrollable-container-2">
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">MID TERM TESTS</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">MID TERM TESTS</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">MID TERM TESTS</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section>
                    <div className="top">
                        <div className="font-20">Pending Exams</div>
                        <div className="font-12">
                            <span onClick={() => setSection("tests")}>
                                View All <img src={arrow_right} alt="arrow right" />
                            </span>
                        </div>
                    </div>
                    <div className="tests-list scrollable-container-2">
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">EXAMS</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">EXAMS</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-outter">
                            <div className="item" onClick={() => setDetails("tests")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div>
                                        <div className="color-4 font-12">EXAMS</div>
                                        <div className="font-25 bolder">Median Rule</div>
                                        <div className="extras font-10">
                                            <div>June 10, 2021</div>
                                            <div className="progress-container">
                                                <div className="font-8">
                                                    <div className="progress-line">
                                                        <div className="progress-line-inner bg-3"></div>
                                                    </div> 
                                                    <div>70%</div>
                                                </div>
                                            </div>
                                            <div className="tags">
                                                <span className="bg-2">Maths</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            </div>
        }
    }

    const content = () => {
        if(details  === "none"){
            return <div className="scrollable-container section-content section-content-inner-content-open">
                {appSection()}
            </div>
        } else if(details === "tests"){
            return <div className="test-details scrollable-container">
                <div className="head">
                    <div>
                        <span className="bold">Examination</span> &bull; <span className="color-grey">60 minutes remaining</span>
                        <div className="font-50 bolder">Test Title</div>
                    </div>
                </div>
                <div className="list">
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 1</div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 2</div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 3</div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 4</div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 5</div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 6</div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 7</div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                </div>
                
                <div className="button-container">
                    <span onClick={() => setDetails("correction")}>
                        <Button
                            text="Submit"
                            type="submit"
                            styling="bbg-black full-input"
                        />
                    </span>
                </div>
                
            </div>
        } else if(details === "correction"){
            return <div className="test-details scrollable-container">
                <div className="head">
                    <div>
                        <span className="bold">Examination</span> &bull; <span className="color-grey">You got</span> <span className="color-4 bolder">8</span> out of 10 questions right
                        <div className="font-50 bolder">Test Title</div>
                    </div>
                    <div>
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
                <div className="list">
                    <div className="item">
                        <div className="color-4 bolder">QUESTION 1 IS CORRECT</div>
                        <div className="image"></div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number bg-4">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 2 IS CORRECT</div>
                        <div className="image"></div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number bg-4">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-6 color-8 bolder">QUESTION 3 IS WRONG</div>
                        <div className="image"></div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number bg-4">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number bg-6">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-6 color-8 bolder">QUESTION 4 IS WRONG</div>
                        <div className="image"></div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number bg-6">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options bg-4">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-6 color-8 bolder">QUESTION 5 IS WRONG</div>
                        <div className="image"></div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number bg-4">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number bg-6">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-4 color-8 bolder">QUESTION 6 IS CORRECT</div>
                        <div className="image"></div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number bg-4">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="color-6 color-8 bolder">QUESTION 7 IS WRONG</div>
                        <div className="image"></div>
                        <div className="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim.</div>
                        <div className="options">
                            <div><div className="number bg-6">1</div></div>
                            <div className="text">Nibh venenatis cras sed felis eget velit aliquet sagittis.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">2</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number">3</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                        <div className="options">
                            <div><div className="number bg-4">4</div></div>
                            <div className="text">Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit.</div>
                        </div>
                    </div>
                </div>
                
                <div className="button-container double-container">
                    <span onClick={() => setDetails("correction")}>
                        <Button
                            text="Email me the result"
                            styling="bbg-black full-input"
                        />
                    </span>
                    <span onClick={() => setDetails("correction")}>
                        <Button
                            text="Print this result"
                            styling="bbg-6 full-input"
                        />
                    </span>
                </div>
                
            </div>
        }
    }
    
    return <div className="tests content">
        <div className="top-extras">
            <Search 
                image={search}
                type="text"
                styling="bg-white-border-black full-input"
                placeholder="Search for something..."
            />
            <b>{currentTime.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</b>
        </div>
        {content()}
    </div>
}

export default Tests
