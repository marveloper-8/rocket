import React, {useState} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// style
import './style/style.scss'
// widgets
import ProgressProvider from '../../../widgets/ProgressProvider'
// icons
import arrow from '../../../icons/left-arrow.svg'

const GradePopup = e => {
    const [academic, setAcademic] = useState(false)
    const [performance, setPerformance] = useState(false)

    
    const cardActive = () => {
        if(academic){
            return "card card-academic-active"
        } else if(performance){
            return "card card-performance-active"
        }else{
            return "card"
        }
    }

    // academic
    const academicActive = () => {
        if(academic){
            return "card-container-active"
        } else if(performance){
            return "card-inner-inactive"
        }else{
            return ""
        }
    }
    const academicChartActive = () => {
        if(academic){
            return "card-inner-active border-right"
        } else{
            return "card-inner border-right"
        }
    }
    const openAcademic = () => {
        if(!academic){
            setAcademic(true)
        }
    }

    // performance
    const performanceActive = () => {
        if(performance){
            return "card-container-active"
        } else if(academic){
            return "card-inner-inactive"
        }else{
            return ""
        }
    }
    const performanceChartActive = () => {
        if(performance){
            return "card-inner-active border-right"
        } else{
            return "card-inner"
        }
    }
    const openPerformance = () => {
        if(!performance){
            setPerformance(true)
        }
    }
    
    return <div className={e.active ? "popup" : "popup-close"}>
        <div className="popup-background" onClick={e.closePopup}></div>
        <div className={cardActive()}>
            <div className="close" onClick={e.closePopup}>
                <span>&times;</span>
            </div>

            <div className={academicActive()}>
                <div className={academicChartActive()} 
                    onClick={() => openAcademic()}
                >
                    {academic 
                        && <div className="arrow-back" onClick={() => setAcademic(false)}>
                            <img src={arrow} alt="arrow" />
                        </div>
                    }
                    <ProgressProvider valueStart={0} valueEnd={80}>
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
                    <div className="font-16">
                        {academic 
                            ? "Total Academic Grade" 
                            : "Academic Grade"
                        }
                    </div>
                </div>
                {academic && <div className="chart-list">
                    <div className="scrollable-container">
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>                
                        
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>                
                        
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>                
                        
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                    </div>
                </div>}
            </div>
            
            <div className={performanceActive()}>
                <div className={performanceChartActive()} 
                    onClick={() => openPerformance()}
                >
                    {performance 
                        && <div className="arrow-back" onClick={() => setPerformance(false)}>
                            <img src={arrow} alt="arrow" />
                        </div>
                    }
                    <ProgressProvider valueStart={0} valueEnd={64}>
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
                    <div className="font-16">
                        {performance 
                            ? "Total Performance Grade" 
                            : "Performance Grade"
                        }
                    </div>
                </div>
                {performance && <div className="chart-list">
                    <div className="scrollable-container">
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>                
                        
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>                
                        
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>                
                        
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                        <div className="card-inner">
                            <ProgressProvider valueStart={0} valueEnd={64}>
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
                                            stroke: `#81cbfa`,
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',
                                            // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            text: {
                                                fill: '#81cbfa',
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
                            <div className="font-12">Performance Grade</div>
                        </div>
                    
                    </div>
                </div>}
            </div>
            
            {/* <div className={performanceActive()}>
                <ProgressProvider valueStart={0} valueEnd={64}>
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
                                stroke: `#81cbfa`,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'round',
                                // Customize transition animation
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                },
                                text: {
                                    fill: '#81cbfa',
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
                <div className="font-16">Performance Grade</div>
            </div> */}
        </div>
    </div>
}

export default GradePopup
