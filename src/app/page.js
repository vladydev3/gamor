'use client'
import { ThemeProvider } from 'next-themes';
import NavBar from "../components/NavBar";
import MainBoard from "@/components/MainBoard";
import CategoriesSection from "@/components/CategoriesSection";
import RootLayout from "./layout";

export default function Home({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <RootLayout>
        <div className="bg-gray-100 dark:bg-black-500 ">
          <NavBar />
          <MainBoard />
          <CategoriesSection />
        </div>
      </RootLayout>
    </ThemeProvider>
  );
}