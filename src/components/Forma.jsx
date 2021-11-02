import React, { useState } from 'react';

const Forma = () => {
    const [bool, setBool] = useState(false)
    const [myMail, setMyMail] = useState('')
    const [myPass, setMyPass] = useState('')
    const [mySecondPass, setMySecondPass] = useState('')
    let formaaa
    const login = () => {
        if (myPass === mySecondPass) {
            setBool(true)
        } else {
            console.log('Raznye paroli')
        }
    }
    // console.log(bool)
    const logOut = () => {
        setBool(false)
    }
    if (!bool) {
        formaaa = (
            <div>
                {/* <form> */}
                <label htmlFor="mail">Email:</label><br />
                <input type="text" id="mail" name="mail" onChange={(e) => {
                    setMyMail(e.target.value)
                }} /><br />
                <label htmlFor="pass">Password: </label><br />
                <input type="password" id="pass" name="pass" onChange={(e) => {
                    setMyPass(e.target.value)
                }} /><br />
                <label htmlFor="2-pass">Repeat password: </label><br />
                <input type="password" id="2-pass" name="2-pass" onChange={(e) => {
                    setMySecondPass(e.target.value)
                }} /><br />
                <button onClick={login}>Log in</button>

                {/* </form> */}
            </div>
        )
    } else {
        formaaa = (
            <div>
                <h3>{myMail} </h3>
                <button onClick={logOut}>Log out</button>
            </div>
        )
    }
    return (
        <div>
            {formaaa}
        </div>
    );
};

export default Forma;