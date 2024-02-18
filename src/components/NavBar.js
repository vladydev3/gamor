'use client'
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
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
            <li className={`transition duration-500 hover:text-violet-600 dark:hover:text-orange-500
            ${pathname === '/' ? 'dark:text-orange-500 text-violet-600' : 'dark:text-white text-black'}
            `}>
            <Link href="/">Home</Link>
            </li>
            <li><Link className='transition duration-500 hover:text-violet-600 dark:hover:text-orange-500' href="#">Streams</Link></li>
            <li><Link className='transition duration-500 hover:text-violet-600 dark:hover:text-orange-500' href="#">Party</Link></li>
            <li><Link className='transition duration-500 hover:text-violet-600 dark:hover:text-orange-500' href="#">Premium</Link></li>
        </ul>
        <ul className="flex gap-10">
            {user ? (
            <li><a onClick={handleLogout} className="cursor-pointer transition duration-500 hover:text-orange-500">Sign Out</a></li>
            ) : (
            <>
                <li><Link className='transition duration-500 hover:text-violet-600 dark:hover:text-orange-500' href="/login">Sign In</Link></li>
                <li><Link href="/register" className="transition duration-500 hover:text-orange-500 border-2 border-gray-600 bg-black-100 shadow-md shadow-black text-white rounded-full py-2 px-4">Create account</Link></li>
            </>
            )}
            <ThemeSwitch />
        </ul>
        </nav>
    )
};

export default NavBar;