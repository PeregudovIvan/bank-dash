import "./profile-info.scss";

import woman from "../../resources/profile/woman.png";
import pencil from "../../resources/profile/pencil.svg";

const ProfileInfo = () => {
    return (
        <div className="profile__info">
            <div className="profile__info__photo">
                <img src={woman} alt="woman" />
                <button className="profile__info__photo__button">
                    <img src={pencil} alt="pencil" />
                </button>
            </div>
            <div className="profile__info__inputs">
                <div className="profile__info__inputs__element">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Charlene Reed"
                    />
                </div>
                <div className="profile__info__inputs__element">
                    <label htmlFor="user_name">User Name</label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        placeholder="Charlene Reed"
                    />
                </div>
                <div className="profile__info__inputs__element">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="charlenereed@gmail.com"
                    />
                </div>
                <div className="profile__info__inputs__element">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="**********"
                    />
                </div>
                <div className="profile__info__inputs__element">
                    <label htmlFor="date">Date of Birth</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="25 January 1990"
                    />
                </div>
                <div className="profile__info__inputs__element">
                    <label htmlFor="present-address">Present Address</label>
                    <input
                        type="text"
                        name="present-address"
                        id="present-address"
                        placeholder="San Jose, California, USA"
                    />
                </div>
                <div className="profile__info__inputs__element">
                    <label htmlFor="permanent-address">Permanent Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="San Jose, California, USA"
                    />
                </div>
                <div className="profile__info__inputs__element">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="San Jose"
                    />
                </div>
                <div className="profile__info__inputs__element">
                    <label htmlFor="postal_code">Postal Code</label>
                    <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        placeholder="45962"
                    />
                </div>

                <div className="profile__info__inputs__element">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        placeholder="USA"
                    />
                </div>
                <button className="profile__info__inputs__element__button">
                    Save
                </button>
            </div>
        </div>
    );
};

export default ProfileInfo;
