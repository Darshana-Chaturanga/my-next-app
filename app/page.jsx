import HeaderNav from "@/components/header-nav";
import FeaturedMovies from "@/components/home/featured-movies";
import HeroBanner from "@/components/home/hero-banner";

// SSR - server side render component (Server component)
export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen ">  
      <HeaderNav/>
      <main className="flex-1 items-center">
        <HeroBanner/>
        <FeaturedMovies/>
      </main>
      <footer className="flex h-72 bg-blue-800 ">
        <div>Footer section</div>
      </footer>
    </div>
  );
}
