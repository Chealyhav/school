import React from "react";
import { useList } from "@refinedev/core";
import { User2 } from "lucide-react";
import { Loading } from "../loading/loanding";

export const Dashboard: React.FC = () => {
  const { data: studentData, isLoading: isStudentsLoading } = useList({
    resource: "student",
  });
  const totalStudents = studentData?.total ?? 0;

  const { data: teacherData, isLoading: isTeachersLoading } = useList({
    resource: "teacher",
  });
  const totalTeachers = teacherData?.total ?? 0;

  const { data: classData, isLoading: isClassesLoading } = useList({
    resource: "classes",
  });
  const totalclasses = classData?.total ?? 0;

  const { data: subjectData, isLoading: isSubjectsLoading } = useList({
    resource: "subjects",
  });
  const totalsubjects = subjectData?.total ?? 0;
  
  const { data: parentData, isLoading: isParentLoading } = useList({
    resource: "parent",
  });
  const totalparent = parentData?.total ?? 0;
  
  if (
    isStudentsLoading ||
    isTeachersLoading ||
    isClassesLoading ||
    isSubjectsLoading ||
    isParentLoading
  ) {
    return <div><Loading/></div>;
  }

  return (
    <div>
      <h1 className="text-xl font-semibold">Dashboard Page</h1>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 py-6 ">
        <div className="bg-slate-600 p-4 rounded-md  bg-gradient-to-r from-slate-900 to-slate-700">
          <User2 className="size-24 text-white" />
          <p className="text-lg text-white">Number of Students</p>
          <h2 className="text-base text-white">{totalStudents}</h2>
        </div>
        <div className="bg-slate-600 p-4 rounded-md  bg-gradient-to-r from-red-500 to-orange-500">
          <User2 className="size-24 text-white" />
          <p className="text-lg text-white">Number of Teachers</p>
          <h2 className="text-base text-white">{totalTeachers}</h2>
        </div>
        <div className="bg-slate-600 p-4 rounded-md  bg-gradient-to-r from-rose-400 to-red-500">
          <User2 className="size-24 text-white" />
          <p className="text-lg text-white">Number of Classes</p>
          <h2 className="text-base text-white">{totalclasses}</h2>
        </div>
     

        <div className="bg-slate-600 p-4 rounded-md     bg-gradient-to-r from-fuchsia-500 to-pink-500">
          <User2 className="size-24 text-white" />
          <p className="text-lg text-white">Number of Subjects</p>
          <h2 className="text-base text-white">{totalsubjects}</h2>
        </div>
        <div className="bg-slate-600 p-4 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600">
          <User2 className="size-24 text-white" />
          <p className="text-lg text-white">Number of </p>
          <h2 className="text-base text-white">{totalparent}</h2>
        </div>
      </div>
    </div>
  );
};
