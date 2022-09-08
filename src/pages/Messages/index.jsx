import React, {useState, useEffect} from 'react'
// style
import './style/style.scss'
// icons
import search from '../../icons/search.svg'
import phone from '../../icons/phone.svg'
import attach from '../../icons/attach.svg'
import send from '../../icons/send.svg'
import file from '../../icons/file.svg'
import chatting from '../../icons/chatting.svg'
import no_chat from '../../icons/no-chat.svg'
// widgets
import Search from '../../widgets/inputs/Search'
import Text from '../../widgets/inputs/Text'

const Messages = () => {
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

    const [add, setAdd] = useState(false)
    const [attachFile, setAttachFile] = useState(false)
    const [message, setMessage] = useState(false)
    const [chat, setChat] = useState(false)

    return <div className="messages">
        <div className="left">
            <div className="font-30">Messages</div> 
            <Search 
                image={search}
                type="text"
                styling="bg-white-border-black full-input"
                placeholder="Search for someone..."
            />
            {add ? <div className="new-message user-list scrollable-container">
                    <div className="item">
                        <div className="image"></div>
                        <div className="text">
                            <div className="top">
                                <div className="name">Jane Doe</div>
                            </div>
                            <div className="message font-12">Student</div>
                        </div>
                    </div>
                </div> : <div className="user-list scrollable-container">
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                    <div className="item" onClick={() => setMessage(true)}>
                        <div className="image">
                            <div className="active"></div>
                        </div>
                        <div className="text">
                            <div className="top">
                                <div className="name">John Doe</div>
                                <div className="time">8:00 PM</div>
                            </div>
                            <div className="message font-12">How are you doing?</div>
                        </div>
                    </div>
                
                </div>
            }
            <span className={add ? "add add-active bg-black" : "add bg-black"} onClick={() => setAdd(!add)}>
                <span>+</span>
            </span>
        </div>
        <div className="right">
                {message ? <><div className="top">
                        <div className="item">
                            <Search 
                                image={search}
                                type="text"
                                styling="bg-white-border-black full-input"
                                placeholder="Search for something..."
                            />

                            <b>{currentTime.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</b>
                        </div>
                        <div className="item">
                            <b>John Doe <span className="font-12">(john@doe.com)</span></b>
                            <div className="icons">
                                <div className="icon-container">
                                    <span className="icon bg-5">
                                        <img src={phone} alt="phone" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {attachFile ? <div className="scrollable-container chat-container">
                            <div className="close-container">
                                <div className="close" onClick={() => setAttachFile(false)}>
                                    <span>&times;</span>
                                </div>
                            </div>
                            <div className="preview">
                                <img src={file} alt="attach file" />
                                <div className="font-20">
                                    Drop file here or <span className="link-1">Browse</span>
                                </div>
                            </div>
                            <div className="text-container text-container-2">
                                <Text 
                                    label="Add a comment"
                                    type="text"
                                    styling="bg-white-border-black full-input"
                                    label_styling="bg-white"
                                />
                                <div className="icon-container">
                                    <span className="icon bg-5" onClick={() => {     
                                        setChat(true)
                                        setAttachFile(false)
                                    }}>
                                        <img src={send} alt="send" />
                                    </span>
                                </div>
                            </div>

                        </div> : <>{chat ? <div className="scrollable-container chat-container">
                                <div className="item from">
                                    <div className="image">
                                        <div className="active"></div>
                                    </div>
                                    <div className="text-bubble">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                                <div className="item to">
                                    <div className="text-bubble">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                                <div className="item to">
                                    <div className="text-bubble">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                                <div className="item from">
                                    <div className="image">
                                        <div className="active"></div>
                                    </div>
                                    <div className="text-bubble">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                                <div className="item to">
                                    <div className="text-bubble">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                                <div className="item from">
                                    <div className="image">
                                        <div className="active"></div>
                                    </div>
                                    <div className="text-bubble">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                                <div className="item to">
                                    <div className="text-bubble">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </div>
                                </div>
                            </div> : <div className="chat-container scrollable-container no-chat">
                                <img src={no_chat} alt="no chat" />
                                <div className="font-16">
                                    Send this person a message to start a conversation
                                </div>
                            </div>}
                            
                            <div className="text-container">
                                <div className="icon-container">
                                    <span className="icon bg-5" onClick={() => setAttachFile(true)}>
                                        <img src={attach} alt="attach" />
                                    </span>
                                </div>
                                <Text 
                                    label="Send a message"
                                    type="text"
                                    styling="bg-white-border-black full-input"
                                    label_styling="bg-white"
                                />
                                <div className="icon-container">
                                    <span className="icon bg-5" onClick={() => setChat(true)}>
                                        <img src={send} alt="send" />
                                    </span>
                                </div>
                            </div>
                        </>
                    }</> : <><div className="top top-2">
                        <div className="item">
                            <b>{currentTime.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</b>
                        </div>
                    </div>
                    <div className="chat-container no-message">
                        <img src={chatting} alt="no message" />
                        <div className="font-16">
                            Start a new message by clicking on a contact
                        </div>
                    </div>
                </>}
            
        </div>
    </div>
}

export default Messages
