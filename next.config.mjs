/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
    },
};

export default nextConfig;
