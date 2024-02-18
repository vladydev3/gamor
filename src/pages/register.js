import React from 'react';
import Link from 'next/link';
import '../app/globals.css'

export default function Register() {

    return (
        <div className="bg-black-500 p-10 h-screen">
            <nav className="mb-8 text-right">
                <Link href="/" className='text-white mr-10 text-xl hover:text-orange-500 transition duration-500'>
                    Home
                </Link>
                <Link className="transition duration-500 hover:text-orange-500 border-2 border-gray-600 bg-black-100 text-white text-xl rounded-full py-2 px-4" href="/login">
                    Sign in
                </Link>
            </nav>
            <form className="flex flex-col w-1/2 m-auto bg-black-550 p-10 rounded-2xl">
                <label htmlFor="email" className="text-white mb-2">Set email:</label>
                <input 
                    type="email" 
                    id="email" 
                    className="text-black mb-4 p-2 "
                />

                <label htmlFor="password" className="text-white mb-2">Set password:</label>
                <input 
                    type="password" 
                    id="password" 
                    className="mb-4 p-2 text-black"
                />

                <button type="submit" className="bg-orange-500 hover:bg-orange-600 transition duration-500 text-white p-2 rounded">Create Account</button>
            </form>
        </div>
    );
}