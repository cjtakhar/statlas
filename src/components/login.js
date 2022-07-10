import { useState } from 'react';
import { db } from './userdb';

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = () => {
        if ({name} !== db.username) {
            alert("hello!")
        } else alert("You're in!")
    }

    return(
        <form>
            <div className="name-div">
                <label className="name">name</label>
                <input className="name-input"
                    type="text" 
                    name="name" 
                    placeholder="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="pw-div">
                <label className="pw">password</label>
                <input className="pw-input"
                    type="text" 
                    name="password" 
                    placeholder="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn" type="submit">enter.</button>
        </form>
    )
}