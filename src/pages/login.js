import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../app/globals.css'
import { supabase } from '../supabaseClient.js';


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.error('Error logging in:', error.message);
        }
        else {
            router.push('/');
        }
    }

    const user = supabase.auth.getSession().user;

    if (user) {
        router.push('/');
    }

    return (
        <div className="bg-black-500 p-10 h-screen">
            <nav className="mb-8 text-right">
                <Link href="/" className='text-white mr-10 text-xl hover:text-orange-500 transition duration-500'>
                    Home
                </Link>
                <Link className="transition duration-500 hover:text-orange-500 border-2 border-gray-600 bg-black-100 text-white text-xl rounded-full py-2 px-4" href="#">
                    Create account
                </Link>
            </nav>
            <form onSubmit={handleLogin} className="flex flex-col w-1/2 m-auto bg-black-550 p-10 rounded-2xl">
                <label htmlFor="email" className="text-white mb-2">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    ref={emailRef}
                    className="text-black mb-4 p-2 "
                />

                <label htmlFor="password" className="text-white mb-2">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    ref={passwordRef}
                    className="mb-4 p-2 text-black"
                />

                <button type="submit" className="bg-orange-500 hover:bg-orange-600 transition duration-500 text-white p-2 rounded">Log In</button>
            </form>
        </div>
    );
}