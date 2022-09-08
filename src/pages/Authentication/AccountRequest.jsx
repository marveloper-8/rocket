import React from 'react'
import {Link} from 'react-router-dom'
// widgets
import Text from '../../widgets/inputs/Text'
import File from '../../widgets/inputs/File'
import Select from '../../widgets/inputs/Select'
import Button from '../../widgets/buttons/Button'
// styling
import './style/style.scss'
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

const AccountRequest = () => {
    return <div className="authentication">
        <div>
            <div className="right bg-2">
                <div className="content">
                    <div className="font-40">Request For Account</div>
                    <div>If you school at Greenspring and would like to be a part of this classroom, fill in your information to request for an account. You will receive an email in less than 48 Hours with your new account information.</div>
                </div>
            </div>
            <div className="left">
                <div className="content">
                    <div className="font-25">Account Request</div>
                    <form>
                        <Text 
                            label="First Name"
                            required={true}
                            type="text"
                            styling="bg-white-border-black full-input"
                            label_styling="bg-white"
                        />
                        <Text 
                            label="Last Name"
                            required={true}
                            type="text"
                            styling="bg-white-border-black full-input"
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
                        <File 
                            label="Upload Latest Transcript"
                            required={true}
                            type="file"
                            styling="bg-white-border-black full-input"
                            label_styling="bg-white"
                        />
                        <Button
                            text="Request"
                            type="submit"
                            styling="bbg-black full-input"
                        />
                        <div className="other-notes">
                            Have an account? <Link className="link-1" to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default AccountRequest
