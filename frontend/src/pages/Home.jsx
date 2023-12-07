import MainCarousel from "../customer/components/MainCarousel";
import HomeCard from "../customer/components/Men/HomeCard";
import WomenTop from "../customer/components/Women/WomenTop";
import ShoesCard from "../customer/components/Shoes/ShoesCard";
import MenShirtCard from "../customer/components/Men/MenShirtCard";


export default function Home() {
  return (
    <main className="bg-slate-100">
      <MainCarousel />
      <div className="p-7">
        <MenShirtCard />
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-300" />
        <WomenTop />
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-300" />
        <ShoesCard />
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-300" />
        <HomeCard />
      </div>
     
    </main>
  );
}
