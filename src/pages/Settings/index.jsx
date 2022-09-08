import React, {useState, useEffect} from 'react'
// style
import './style/style.scss'
// illustrations
import customer_care from '../../illustrations/customer-service.svg'
// icons
import arrow_right from '../../icons/right-arrow2.svg'
// widgets
import Text from '../../widgets/inputs/Text'
import Select from '../../widgets/inputs/Select'
import Button from '../../widgets/buttons/Button'
// data
const _class = [
    {
        name: "Junior Secondary School 1 (JSS1)",
        value: "JSS1"
    },
    {
        name: "Junior Secondary School 2 (JSS2)",
        value: "JSS1"
    },
    {
        name: "Junior Secondary School 3 (JSS3)",
        value: "JSS3"
    },
    {
        name: "Senior Secondary School 1 (SSS1)",
        value: "SSS1"
    },
    {
        name: "Senior Secondary School 2 (SSS2)",
        value: "SSS2"
    },
    {
        name: "Senior Secondary School 3 (SSS3)",
        value: "SSS3"
    },
]
const department = [
    {
        name: "Science",
        value: "science"
    },
    {
        name: "Art",
        value: "art"
    },
    {
        name: "Finance",
        value: "finance"
    },
]

const Account = () => {
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

    const [settings, setSettings] = useState("account")
    const [accordion, setAccordion] = useState(false)

    const content = () => {
        if(settings === "account"){
            return <>
                <div className="top bolder">
                    <span className="font-20">Settings</span>

                    <span>{currentTime.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</span>
                </div>
                <div className="settings-container scrollable-container">
                    <form>
                        <div className="font-15 bolder">Account Settings</div>
                        <div className="inner double-container">
                            <Text 
                                label="First Name"
                                required={true}
                                type="text"
                                styling="bg-white-border-black"
                                label_styling="bg-white"
                            />
                            <Text 
                                label="Last Name"
                                required={true}
                                type="text"
                                styling="bg-white-border-black"
                                label_styling="bg-white"
                            />
                            <Text 
                                label="Email"
                                required={true}
                                type="text"
                                styling="bg-white-border-black full-input"
                                label_styling="bg-white"
                            />
                            <Text 
                                label="Phone Number"
                                required={true}
                                type="text"
                                styling="bg-white-border-black full-input"
                                label_styling="bg-white"
                            />
                            <Select 
                                label="Select Your Class"
                                required={true}
                                styling="bg-white-border-black full-input"
                                label_styling="bg-white"
                                options={_class}
                            />
                            <Select 
                                label="Select Your Department"
                                required={true}
                                styling="bg-white-border-black full-input"
                                label_styling="bg-white"
                                options={department}
                            />
                        </div>
                        <Button
                            text="Save Changes"
                            type="submit"
                            styling="bbg-black"
                        />
                    </form>

                    <form>
                        <div className="font-15 bolder">Password Settings</div>
                        <div className="inner double-container">
                            <Text 
                                label="New Password"
                                required={true}
                                type="password"
                                styling="bg-white-border-black"
                                label_styling="bg-white"
                            />
                            <Text 
                                label="Confirm Password"
                                required={true}
                                type="password"
                                styling="bg-white-border-black"
                                label_styling="bg-white"
                            />
                        </div>
                        <Button
                            text="Change Password"
                            type="submit"
                            styling="bbg-black"
                        />
                    </form>
                </div>
                
            </>
        }else if(settings === "security"){
            return <>
                <div className="top bolder">
                    <span className="font-20">Support</span>

                    <span>{currentTime.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</span>
                </div>
                <div className="settings-container scrollable-container">
                    Hello Joshua,
                    <div className="font-35">How can we <span className="bolder bg-2"> &nbsp;help you?&nbsp;</span></div>
                    <div className="accordion">
                        <div className="accordion-top bold">
                            <span>How do you use this app?</span>
                            <img onClick={() => setAccordion(!accordion)} src={arrow_right} alt="arrow" className={accordion && "active"} />
                        </div>
                        <div className={accordion ? "accordion-content accordion-content-open" : "accordion-content"}>
                            <div className="inner">If you school at Greenspring and would like to be a part of this classroom, fill in your information to request for an account. You will receive an email in less than 48 Hours with your new account information.</div>
                        </div>
                    </div>

                    <div className="customer-support bg-2">
                        <img src={customer_care} alt="customer care" />
                    </div>
                </div>
           </>
        }
    }

    return <div className="settings">
        <div className="left">
            <div className="font-30">Account</div> 
            <div className="list scrollable-container">
                <div className={settings === "account" ? "item active" : "item"} onClick={() => setSettings("account")}>
                    <div className="image"></div>
                    <div className="text">
                        <div className="top">
                            <div className="name">Settings</div>
                            <div className="arrow">
                                <img src={arrow_right} alt="arrow" />
                            </div>
                        </div>
                        <div className="font-12">Personal Information, Change Password</div>
                    </div>
                </div>
            
                <div className={settings === "security" ? "item active" : "item"} onClick={() => setSettings("security")}>
                    <div className="image"></div>
                    <div className="text">
                        <div className="top">
                            <div className="name">Support</div>
                            <div className="arrow">
                                <img src={arrow_right} alt="arrow" />
                            </div>
                        </div>
                        <div className="font-12">Customer Care, FAQ</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            {content()}
        </div>
    </div>
}

export default Account
