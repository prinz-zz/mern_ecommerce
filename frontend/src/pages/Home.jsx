import MainCarousel from "../customer/components/MainCarousel";
import HomeCard from "../customer/components/HomeCard";

export default function Home() {
  return (
    <main className='bg-slate-100'>
      <MainCarousel />
      <div className="p-7">
        <HomeCard />
      </div>
    </main>
  );
}
