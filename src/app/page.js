
import HeroSection from "../Components/HomeSection/Hero_Section";
import ExperienceSection from "../Components/HomeSection/ExperienceSection";
import FeaturesPage from "@/Components/HomeSection/Features";
import LatestBlogs from "@/Components/HomeSection/LatestBlogs";

export default function Home() {


  return (

    <div >
      <HeroSection></HeroSection>

      <div className="container m-auto  px-4">
        <ExperienceSection></ExperienceSection>
      <FeaturesPage></FeaturesPage>
      <LatestBlogs></LatestBlogs>
      </div>

    </div>
  );
}
