import { AcademicCapIcon } from "@heroicons/react/24/solid";

interface TitleProps {
  title: string;
  subtitle: string;
  des?: string;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle, des }) => {
  return (
    <div className="text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <h2 className="text-base">{subtitle}</h2>
      </div>
      <div className=" flex justify-center items-center space-x-2">
        <span className="h-0.5 w-16 bg-red-600"></span>
        <AcademicCapIcon className="w-8 text-slate-600"/>
        <span className="h-0.5 w-16 bg-slate-600"></span>
      </div>
      {des && <p className="text-lg font-light py-4">{des}</p>}
    </div>
  );
};
