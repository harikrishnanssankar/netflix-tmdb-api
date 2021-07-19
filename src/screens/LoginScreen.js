import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import db, { auth } from '../firebase';
import './LoginScreen.css';



const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const passwordRef = useRef(null);
    const [err, setErr] = useState("");


    const history = useHistory();



    const [email, setEmail] = useState("");

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            email,
            passwordRef.current.value
        ).then((authUser) => {
            authUser.user.updateProfile({displayName:email}).then(() => {
                db.collection('users').doc(`${authUser.user.uid}`).set({
                    id: authUser.user.uid,
                    email: email,
                    createdAt: new Date(),
                })
            })
        }).then(
            history.push('/')
        ).catch(error => {
            setErr(error.message)
        })

    }
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            email,
            passwordRef.current.value
        ).then((authUser) => {
            history.push('/')
        }).catch(error => {
            setErr(error.message)
        })

    }



    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <div className="loginScreen__nav">
                    <img className="loginScreen__logo"
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt="img"
                    />
                    <button onClick={() => setSignIn(true)} className="signin__btn">Sign In</button>
                </div>
                <div className="loginScreen__gradient" />
            </div>


            {signIn ?
                <>
                    {
                        signUp
                            ?
                            <div className="signin__container">
                                <h1>Sign Up</h1>
                                {err && <p className="err__message">{"!" + err}</p>}
                                <form>
                                    <input  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" value={email} />
                                    <input ref={passwordRef} type="password" placeholder="Password" />
                                    <button onClick={register}>Sign Up</button>
                                </form>
                                <div className="signup__para">
                                    <p>Already Registered?</p>
                                    <p onClick={() => setSignUp(false)}>Login</p>
                                </div>
                            </div>
                            :
                            <div className="signin__container">
                                <h1>Sign In</h1>
                                {err && <p className="err__message">{"!" + err}</p>}
                                <form>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" value={email} />
                                    <input ref={passwordRef} type="password" placeholder="Password" />
                                    <button onClick={login}>Sign In</button>
                                </form>
                                <div className="signup__para">
                                    <p>New to Netflix?</p>
                                    <p onClick={() => setSignUp(true)}>Sign up now</p>
                                </div>
                            </div>
                    }
                </>

                :
                <div className="loginScreen__body">
                    <h1>Unlimited movies, TV <br /> shows and more.</h1>
                    <h3>Watch anywhere.Cancel at any time</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>

                    <div className="loginScreen__input">
                        <form>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" />
                            <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">GET STARTED <i className="arrow fas fa-greater-than"></i></button>
                        </form>
                    </div>
                </div>
            }

        </div >
    );
}

export default LoginScreen;