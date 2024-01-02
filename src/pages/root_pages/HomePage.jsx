import { Helmet } from "react-helmet-async";
import BannerSection from "../../components/root_pages_components/home_page_components/BannerSection";
import AchievementSection from "../../components/root_pages_components/home_page_components/AchievementSection";
import PricingSection from "../../components/root_pages_components/home_page_components/PricingSection";
import FAQSection from "../../components/root_pages_components/home_page_components/FAQSection";
import SponsorsSection from "../../components/root_pages_components/home_page_components/SponsorsSection";
import TestimonialSection from "../../components/root_pages_components/home_page_components/TestimonialSection";
import ContactSection from "../../components/root_pages_components/home_page_components/ContactSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - Invento Wave</title>
      </Helmet>
      <div>
        <BannerSection />
        <AchievementSection />
        <PricingSection />
        <FAQSection />
        <SponsorsSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
