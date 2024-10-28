import ProfileInfo from "../profile-info/Profile-info";
import "./profile.scss";

const Profile = () => {
    return (
        <div className="profile__wrapper">
            <div className="profile">
                <div className="profile__menu">
                    <div className="profile__menu__edit">
                        <a href="#">Edit Profile</a>
                        <span></span>
                    </div>
                    <div className="profile__menu__preferences">
                        <a href="#">Preferences</a>
                    </div>
                    <div className="profile__menu__security">
                        <a href="#">Security</a>
                    </div>
                    <div className="profile__menu__divider"></div>
                </div>
                <ProfileInfo />
            </div>
        </div>
    );
};

export default Profile;
