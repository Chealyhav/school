import { Banner } from "@/components/school-web/banner";
import { CardBlog } from "@/components/school-web/blog";
import { Title } from "@/components/school-web/title";

export const BlogPage: React.FC = () => {
    return (
      <div>
        <Banner content="News" link="News" />
        <div className="container py-4">
          <div className=""><Title title="Our Blog" subtitle=""/></div>
          <div className="">
            <CardBlog/>
          </div>
        </div>
      </div>
    );
  };
  