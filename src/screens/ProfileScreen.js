import { auth } from '../firebase';
import Nav from '../components/Nav/Nav'
import './ProfileScreen.css'


const ProfileScreen = () => {
    return ( 
        <div className="profile__screen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img className="avatar__img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <div className="profileScreen__details">
                        <form className="profileScreen__form">
                            <input className="profileScreen__input" type="email" placeholder="Enter email" />
                            <h3>Plans [Current Plan: Premium]</h3>
                            <h5>Renewal date: 04/09/2021</h5>
                            <div className="package">
                                <h5>Netflix Standard <br /> <span>1080p</span></h5>
                                <button className="subscribe__btn">Subscribe</button>
                            </div>
                            <div className="package">
                                <h5>Netflix Basic <br /> <span>480p</span></h5>
                                <button className="subscribe__btn">Subscribe</button>
                            </div>
                            <div className="package">
                                <h5>Netflix Premium <br /> <span>4K HDR</span></h5>
                                <button className="subscribed__btn">Current Package</button>
                            </div>
                            <button className="signout__btn" onClick={() => auth.signOut()}>Sign out</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileScreen;