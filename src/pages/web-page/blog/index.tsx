import { Banner } from "@/components/school-web/banner";
import { Title } from "@/components/school-web/title";

export const BlogPage: React.FC = () => {
    return (
      <div>
        <Banner content="News" link="News" />
        <div className="container py-4">
          <div className=""><Title title="Our Classes" subtitle="Our preschool program has six dedicated classes"/></div>
          <h1>ContactPage</h1>
        </div>
      </div>
    );
  };
  