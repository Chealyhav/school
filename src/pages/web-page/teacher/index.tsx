import { Banner } from "@/components/school-web/banner";
import { Title } from "@/components/school-web/title";

export const TeacherPage: React.FC = () => {
  return (
    <div>
      <Banner content="Our Teacher" link="Our Teacher" />
      <div className="container py-4">
        <div className="">
          <Title
            title="Our Classes"
            subtitle="Our preschool program has six dedicated classes"
          />
        </div>
        <h1>ContactPage</h1>
      </div>
    </div>
  );
};
