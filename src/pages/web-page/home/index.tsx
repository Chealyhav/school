import { AboutUs } from "@/components/school-web/about/about-us";
import { ClassesCard } from "@/components/school-web/classes/classes-card";
import { BannerHome } from "@/components/school-web/home/banner";
import { Title } from "@/components/school-web/title";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";
export const HomePage: React.FC = () => {
  return (
    <div className="w-full pt-12 ">
      <BannerHome />
      <div className="bg-red-400  flex md:flex-row flex-col justify-center items-center py-10 space-x-8">
        <h1 className="md:text-4xl text-lg font-semibold dark:text-white">
          How to Enroll Your Child to a Class?
        </h1>
        <Button>
          <Link to="/Contacts">Join Us</Link>
        
        </Button>
      </div>
      <div className="py-4 container">
        <Title
          title="Who we are"
          subtitle="Fable daycare, preschool, and kindergarten"
          des="Well come to Techedu come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community, tolerance and develop something which the modern world is desperate for norem ipsum dolor sit amet desperate."
        />
        <div className="py-4">
          <AboutUs />
        </div>

        <div className="py-4">
          <div className="">
            <Title
              title="Our Classes"
              subtitle=""
            />
          </div>
          <ClassesCard />
        </div>
      </div>
    </div>
  );
};
