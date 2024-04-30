import { Banner } from "@/components/school-web/banner";
import { BannerClasses } from "@/components/school-web/classes/banner";
import { ClassesCard } from "@/components/school-web/classes/classes-card";
import { Title } from "@/components/school-web/title";

export const ClassesPage: React.FC = () => {
  return (
    <div>
      <Banner content="CLASSES" link="Classes" />
      <div className="container py-4">
        <div className=""><Title title="Our Classes" subtitle="Our preschool program has six dedicated classes"/></div>
        <ClassesCard />
        <h1>ContactPage</h1>
      </div>
    </div>
  );
};
