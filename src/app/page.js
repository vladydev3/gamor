import NavBar from "../components/NavBar";
import MainBoard from "@/components/MainBoard";
import CategoriesSection from "@/components/CategoriesSection";

export default function Home() {
  return (
    <div className="bg-black-500 ">
      <NavBar />
      <MainBoard />
      <CategoriesSection />
    </div>
  );
}