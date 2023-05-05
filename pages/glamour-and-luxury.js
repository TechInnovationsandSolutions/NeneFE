import {
  HeroSection,
  GallerySection,
  DiscoverFeelShopSection,
  BannerSection,
  FeaturedSection,
} from "@/sections/pages/glamour-and-luxury";

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
