import React from 'react'
// widgets
import Text from '../../widgets/inputs/Text'
import Button from '../../widgets/buttons/Button'
// styling
import './style/style.scss'

const NewPassword = () => {
    return <div className="authentication">
        <div>
            <div className="right bg-2">
                <div className="content">
                    <div className="font-40">Enter Password</div>
                    <div>Please input your new password and also confirm it to reset your password successfully in order to regain access to your account.</div>
                </div>
            </div>
            <div className="left">
                <div className="content">
                    <div className="font-25">Reset Password</div>
                    <form>
                        <Text 
                            label="New Password"
                            required={true}
                            type="password"
                            styling="bg-white-border-black full-input"
                            label_styling="bg-white"
                        />
                        <Text 
                            label="Confirm Password"
                            required={true}
                            type="password"
                            styling="bg-white-border-black full-input"
                            label_styling="bg-white"
                        />
                        <Button
                            text="Submit"
                            type="submit"
                            styling="bbg-black full-input"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default NewPassword
