import { BannerClasses } from "@/components/school-web/classes/banner";
import { ClassesCard } from "@/components/school-web/classes/classes-card";

export const ClassesPage: React.FC = () => {
  return (
    <div>
      <BannerClasses />
      <div className="container">
        <ClassesCard />
        <h1>ContactPage</h1>
      </div>
    </div>
  );
};
