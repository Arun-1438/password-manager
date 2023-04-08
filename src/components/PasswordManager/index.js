import { Component } from "react";
import {v4 as uuidv4} from "uuid"
import Item from "../Item";
import "./index.css"

class PasswordManager extends Component{
    
    state = {passwordsList : [], searchInput : "", websiteInput : "", usernameInput : "", passwordInput : "", isChecked : false}
    onFormSubmit = event => {
        event.preventDefault();

        const {websiteInput, usernameInput, passwordInput} = this.state 
        if(websiteInput !== "" && usernameInput !== "" && passwordInput !== ""){
            const newPasswordDetails = {
                id : uuidv4(),
                websiteInput : websiteInput,
                usernameInput : usernameInput,
                passwordInput : passwordInput
            }
    
            this.setState(prevState => ({passwordsList : [...prevState.passwordsList, newPasswordDetails] , websiteInput : "", usernameInput : "", passwordInput : ""}))
            
        }
    }

    onChangeWebsiteInput = event => {
        this.setState({websiteInput : event.target.value })
    }

    onChangePasswordInput = event => {
        this.setState({passwordInput : event.target.value })
    }

    onChangeUsernameInput = event => {
        this.setState({usernameInput : event.target.value })
    }

    onChangeCheckBox = event => {
        this.setState({isChecked : event.target.checked})
        // console.log(event.target.checked)
    }

    onChangeSearchInput = event => {
        this.setState({searchInput : event.target.value })
    }

    onDeletePassword = id => {
        const {passwordsList} = this.state
        const filtredByPassword = passwordsList.filter(eachPassword => eachPassword.id !== id)
        this.setState({passwordsList : filtredByPassword})
    }

    render(){
        const {passwordsList, websiteInput, searchInput, usernameInput, passwordInput, isChecked} = this.state
        const filtredByPassword = passwordsList.filter(eachPassword => eachPassword.websiteInput.toLowerCase().includes(searchInput.toLowerCase()))
        console.log(filtredByPassword)
        return(
            <div className="password-manager-container">
                <img className="logo" src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" alt="app logo" />
                <div className="top-container">
                    <img className="mobile-img" src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png" alt="password manager" />
                    <div className="form-container">
                        <form className="form" onSubmit={this.onFormSubmit}>
                            <h3 className="form-title">Add New Password</h3>
                            <div className="input-cont">
                                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website" />
                                <input onChange={this.onChangeWebsiteInput} value={websiteInput} type="text" placeholder="Enter Website" />
                            </div>
                            <div className="input-cont">
                                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt="username" />
                                <input onChange={this.onChangeUsernameInput} value={usernameInput} type="text" placeholder="Enter Username" />
                            </div>
                            <div className="input-cont">
                                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt="password" />
                                <input onChange={this.onChangePasswordInput} value={passwordInput} type="password" placeholder="Enter Password" />
                            </div>
                            <div className="btn-cont">
                                <button className="custom-btn" type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                    <img className="desktop-img" src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" alt="password manager" />
                </div>
                <div className="bottom-container">
                    <div className="bottom-top">
                        <div className="title-cont">
                            <h5 className="title">Your Passwords</h5>
                            <p className="count">{passwordsList.length}</p>
                        </div>
                        <div className="input-cont">
                            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="search" />
                            <input onChange={this.onChangeSearchInput} value={searchInput} type="search" placeholder="Search" />
                        </div>
                    </div>
                    <hr className="hr-line" />
                    <div className="checkbox-cont">
                        <input onChange={this.onChangeCheckBox} type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Show passwords</label>
                    </div>
                    {filtredByPassword.length > 0 ? (
                        <ul className="list-cont">
                            {filtredByPassword.map(eachItem => (<Item onDeletePassword={this.onDeletePassword} key={eachItem.id} itemDetails={eachItem} isChecked={isChecked} />))}
                        </ul>
                    ) : (<>
                        <img className="no-passwords" src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no passwords" />
                        <p>No Passwords</p>
                    </>)}
                </div>
            </div>
        )
    }
}


export default PasswordManager