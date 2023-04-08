

const Item = props => {
    const {id, websiteInput, usernameInput, passwordInput} = props.itemDetails
    const {isChecked, onDeletePassword} = props
    const password = () => {
        if(isChecked){
            return <p className="para-1">{passwordInput}</p>
        }
        else{
            return <img className="stars" src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" alt="stars" />
        }
    }

    const onClickDeleteBtn = () => {
        onDeletePassword(id)
    }
    return(
        <li className="list-item">
            <div className="details">
                <div className="profile">
                    {usernameInput[0].toUpperCase()}
                </div>
                <div>
                    <p className="para">{websiteInput}</p>
                    <p className="para">{usernameInput}</p>
                    {password()}
                </div>
            </div>
            <button onClick={onClickDeleteBtn} className="delete-btn" data-testid="delete" type="button">
                <img className="delete" src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" alt="delete icon" />
            </button>
        </li>
    )
}


export default Item