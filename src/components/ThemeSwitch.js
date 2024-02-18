'use client'

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="cursor-pointer rounded-full p-1 h-8 w-8 flex items-center justify-center transition duration-500 ease-in-out dark:hover:bg-black-100 hover:bg-gray-300"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}

export default ThemeSwitch;