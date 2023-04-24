import HeroSection from "../components/glamour-and-luxury/HeroSection";
import GallerySection from "../components/glamour-and-luxury/GallerySection";
import DiscoverFeelShopSection from "@/components/glamour-and-luxury/DiscoverFeelShopSection";
import BannerSection from "@/components/glamour-and-luxury/BannerSection";
import FeaturedSection from "@/components/glamour-and-luxury/FeaturedSection";

function GlamourLuxury() {
  return (
    <>
      <div className='relative z-0'>
        <HeroSection />
        <GallerySection />
        <DiscoverFeelShopSection />
        <BannerSection />
        <FeaturedSection />
      </div>
    </>
  );
}

export default GlamourLuxury;
