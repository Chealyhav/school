import { AboutUs } from "@/components/school-web/about/about-us";
import { BannerAbout } from "@/components/school-web/about/banner";

export const AboutPage: React.FC = () => {
  return (
    <div>
      <BannerAbout />

      <div className="pt-4 bg-red-500 container">
        <h1 className="text-xl font-semibold">INTRODUCTION ABOUT US</h1>
        <AboutUs />
      </div>
      <h1 className="text-white">AboutPage</h1>
    </div>
  );
};
