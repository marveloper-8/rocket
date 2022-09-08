import React, {useState, useEffect} from 'react'
// style
import './style/style.scss'
// icons
import search from '../../icons/search.svg'
import back_arrow from '../../icons/left-arrow.svg'
import arrow_right from '../../icons/right-arrow2.svg'
// images
import user from '../../images/user.jpg'
// widgets
import Search from '../../widgets/inputs/Search'

const Blogs = () => {
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
                <div className="font-40">Blogs</div> 
                <section>
                    <div className="top">
                        <div className="font-20">Top Blog Posts</div>
                        <div className="font-12">
                            <span onClick={() => setSection("blogs")}>
                                View All <img src={arrow_right} alt="arrow right" />
                            </span>
                        </div>
                    </div>
                    <div className="blogs-list">
                        <div className="item" onClick={() => setDetails("blogs")}>
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            
                <section>
                    <div className="top">
                        <div className="font-20">Top Bloggers</div>
                        <div className="font-12">
                            <span onClick={() => setSection("bloggers")}>
                                View All <img src={arrow_right} alt="arrow right" />
                            </span>
                        </div>
                    </div>
                    <div className="bloggers-list">
                        <div className="item" onClick={() => setDetails("bloggers")}
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                    </div>
                </section> 
            
            </div>
        }else if(section === "blogs"){
            return <div className="section-content-inner">
                <div className="top-2">
                    <span onClick={() => setSection("all")}>
                        <img src={back_arrow} alt="back arrow" />
                        Go back to blogs
                    </span>
                    <div className="font-20">Blogs</div>
                </div>
                <section>
                    <div className="blogs-list">
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image"></div>
                            <div className="text-outter">
                                <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div className="author">
                                    <div className="profile-picture"></div>
                                    <div className="text">
                                        <div className="name">Jane Doe</div>
                                        <div className="font-10">June 10, 2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            
            </div>
        }else if(section === "bloggers"){
            return <div className="section-content-inner">
                <div className="top-2">
                    <span onClick={() => setSection("all")}>
                        <img src={back_arrow} alt="back arrow" />
                        Go back to blogs
                    </span>
                    <div className="font-20">Bloggers</div>
                </div>
                <section>
                    <div className="bloggers-list">
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                    
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                    
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                    
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                    
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
                            </div>
                        </div>
                        <div className="item"
                            style={{
                                backgroundImage: `url(${user})`, 
                                backgroundSize:`cover`
                            }}
                        >
                            <div className="background"></div>
                            <div className="name">
                                <div className="font-25">John</div>
                                <div className="others">Elliot Doe</div>
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
        } else if(details === "blogs"){
            return <div className="blog-details scrollable-container">
                <div className="top-2">
                    <span onClick={() => setDetails("none")}>
                        <img src={back_arrow} alt="back arrow" />
                        Go back to blogs
                    </span>
                    <div className="font-20"></div>
                </div>
                <div className="head">
                    <span className="bold">John Doe</span> &bull; <span className="color-grey">6 minutes read</span>
                    <div className="font-50 bolder">Blog Title</div>
                    <div className="color-grey"><i>This is where the desccription of the blog will be.</i></div>
                </div>
                <div className="header-image"></div>
                <div className="section-container">
                    <div className="section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit. Vel turpis nunc eget lorem dolor sed viverra. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Imperdiet dui accumsan sit amet. Tincidunt vitae semper quis lectus. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Bibendum ut tristique et egestas quis. Magna sit amet purus gravida. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Eget lorem dolor sed viverra ipsum nunc aliquet. Id volutpat lacus laoreet non. Ac tortor dignissim convallis aenean et tortor at risus. Auctor urna nunc id cursus metus aliquam.</div>
                    <div className="section">Ac turpis egestas integer eget aliquet. Turpis egestas sed tempus urna et pharetra pharetra massa. Sit amet volutpat consequat mauris. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Lectus quam id leo in vitae turpis massa sed elementum. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc sed augue lacus viverra vitae.</div>
                    <div className="image"></div>
                    <div className="section">Feugiat in ante metus dictum at tempor commodo ullamcorper a. Cras pulvinar mattis nunc sed blandit libero. Id leo in vitae turpis. Aliquet sagittis id consectetur purus ut. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Urna et pharetra pharetra massa massa ultricies mi quis. Semper quis lectus nulla at. Vestibulum morbi blandit cursus risus at ultrices. Tellus molestie nunc non blandit massa enim nec dui. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Faucibus purus in massa tempor nec feugiat nisl pretium. Cras semper auctor neque vitae tempus quam pellentesque. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Volutpat blandit aliquam etiam erat. Ornare suspendisse sed nisi lacus sed. Id interdum velit laoreet id donec ultrices. Sit amet massa vitae tortor condimentum lacinia quis.</div>
                    <div className="image"></div>
                    <div className="section">Massa tincidunt dui ut ornare lectus sit amet. Sagittis purus sit amet volutpat consequat mauris nunc. Faucibus ornare suspendisse sed nisi lacus. Etiam erat velit scelerisque in dictum non. Sollicitudin aliquam ultrices sagittis orci a. A diam maecenas sed enim ut. Porttitor eget dolor morbi non arcu risus quis. Nulla malesuada pellentesque elit eget. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Tristique senectus et netus et malesuada fames ac turpis egestas. Habitant morbi tristique senectus et netus et malesuada. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu risus quis varius quam quisque id diam vel quam. Purus ut faucibus pulvinar elementum integer enim neque volutpat.</div>
                </div>
                
            </div>
        } else if(details === "bloggers"){
            return <div className="scrollable-container section-content section-content-inner-content-open">
                <div className="section-content-inner">
                    <div className="top-2">
                        <span onClick={() => setDetails("none")}>
                            <img src={back_arrow} alt="back arrow" />
                            Go back to blogs
                        </span>
                        <div className="font-20"></div>
                    </div>
                    <div className="font-30 top-3">Blogs by <span className="bolder">John Doe</span></div>
                    <section>
                        <div className="blogs-list">
                            <div className="item" onClick={() => setDetails("blogs")}>
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image"></div>
                                <div className="text-outter">
                                    <div className="font-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                    <div className="author">
                                        <div className="profile-picture"></div>
                                        <div className="text">
                                            <div className="name">Jane Doe</div>
                                            <div className="font-10">June 10, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 
                </div>
            </div>
        }
    }
    
    return <div className="blogs content">
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

export default Blogs
