import React from 'react'
import {Link} from 'react-router-dom'
// widgets
import Text from '../../widgets/inputs/Text'
import Button from '../../widgets/buttons/Button'
// styling
import './style/style.scss'

const ForgotPassword = () => {
    return <div className="authentication">
        <div>
            <div className="right bg-2">
                <div className="content">
                    <div className="font-40">Enter Email</div>
                    <div>Please input the email address connected to your account. You will receive an email with a link to reset your password after submission.</div>
                </div>
            </div>
            <div className="left">
                <div className="content">
                    <div className="font-25">Forgot Password</div>
                    <form>
                        <Text 
                            label="Email"
                            required={true}
                            type="text"
                            styling="bg-white-border-black full-input"
                            label_styling="bg-white"
                        />
                        <Button
                            text="Submit"
                            type="submit"
                            styling="bbg-black full-input"
                        />
                        <div className="forgot-password">
                            Remember your password? <Link className="link-1" to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default ForgotPassword
