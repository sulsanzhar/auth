import { Eye } from 'lucide-react';
import './SignUp.css'

export const SignUp = () => {
    return (
        <div className='SignUp'>
            <form>
                <h1>Зарегистироваться</h1>
                <label>
                    <p>Email</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Password</p>
                    <input className='password' type="password" />
                    <button className='eye'>
                        <Eye/>
                    </button>
                </label>
                <button className='submit' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
