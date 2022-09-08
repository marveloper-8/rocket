import React from 'react'
import {Link} from 'react-router-dom'
// widgets
import Text from '../../widgets/inputs/Text'
import Button from '../../widgets/buttons/Button'
// styling
import './style/style.scss'

const Authentication = () => {
    return <div className="authentication">
        <div>
            <div className="right bg-2">
                <div className="content">
                    <div className="font-40">Enter Classroom</div>
                    <div>You will find all of your courses, exercises, assessments, and other educational contents provided by Greenspring and Lolla here.</div>
                </div>
            </div>
            <div className="left">
                <div className="content">
                    <div className="font-25">Sign In To Classroom</div>
                    <form>
                        <Text 
                            label="Email"
                            required={true}
                            type="text"
                            styling="bg-white-border-black full-input"
                            label_styling="bg-white"
                        />
                        <Text 
                            label="Password"
                            required={true}
                            type="password"
                            styling="bg-white-border-black full-input"
                            label_styling="bg-white"
                        />
                        <div className="forgot-password">
                            <Link className="link-1" to="/forgot-password">Forgot Password?</Link>
                        </div>
                        <Button
                            text="Sign In"
                            type="submit"
                            styling="bbg-black full-input"
                        />
                        <div className="other-notes">
                            Don't have an account? <Link className="link-1" to="/account-request">Request for one</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Authentication
