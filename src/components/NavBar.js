'use client'
import { useEffect, useState } from 'react';
import {supabase} from '../supabaseClient';
import { usePathname } from 'next/navigation';

const NavBar = () => {

    const pathname = usePathname();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const session = supabase.auth.session;
        setUser(session?.user ?? null);

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            authListener?.unsubscribe;
        };
    }, []);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
  
        if (error) {
            console.error('Error logging out:', error.message)
        }
    }

    return (
            <nav className="cursor-default flex justify-between px-20 py-12 ">
                <ul className="flex gap-8">
                    <li className={`transition duration-500 hover:text-orange-500
                    ${pathname === '/' ? 'text-orange-500' : 'text-white'}
                    `}><a href="/">Home</a></li>
                    <li><a href="#" className="transition duration-500 hover:text-orange-500">Streams</a></li>
                    <li><a href="#" className="transition duration-500 hover:text-orange-500">Party</a></li>
                    <li><a href="#" className="transition duration-500 hover:text-orange-500 ">Premium</a></li>
                </ul>
                <ul className="flex gap-12">
                    {user ? (
                        <li><a onClick={handleLogout} className="cursor-pointer transition duration-500 hover:text-orange-500">Sign Out</a></li>
                    ) : (
                        <>
                            <li><a href="/login" className="transition duration-500 hover:text-orange-500">Sign In</a></li>
                            <li><a href="/register" className="transition duration-500 hover:text-orange-500 border-2 border-gray-600 bg-black-100 text-white rounded-full py-2 px-4">Create account</a></li>
                        </>
                    )}
                </ul>
            </nav>
        )
};

export default NavBar;