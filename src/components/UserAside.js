import React from "react"
import DefaultProfileImage from "../images/default-profile-image.jpg"

const UserAside = (props) => {
    const {profileImageUrl, username} = props
    return (
        <aside className="col-sm-2">
            <div className="panel panel-default">
                <div className="panel-body" style={{padding: 0}}>
                    <img 
                        src={profileImageUrl || DefaultProfileImage } 
                        alt={username}
                        width="200"
                        height="200"
                        className="img-thumbnail"/>

                </div>

            </div>
        </aside>
    )
}

export default UserAside