import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUpdate, useList } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

interface EditStudentProps {
  id?: string;
}

export const EditStudent: React.FC<EditStudentProps> = ({ id }) => {
  const { id: paramId } = useParams<{ id: string }>();
  const userId = id || paramId;
  const [isLoading, setIsLoading] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    refineCore: { onFinish },
  } = useForm({
    refineCoreProps: {
      resource: "student",
      action: "edit",
      id: userId,
    },
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("firstName", data.first_name);
      formData.append("lastName", data.last_name);
      formData.append("dob", data.dob);
      formData.append("gender", data.gender);
      formData.append("age", data.age);
      formData.append("subject", data.subject);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("studentID", data.studentID);
      formData.append("classes", data.classes);
      formData.append("parent", data.parent);
      formData.append("profile", data.background[0]);

      await onFinish(formData);
      reset();
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const { data: subject } = useList({
    resource: "subjects",
  });

  const { data: classes } = useList({
    resource: "classes",
  });

  const { data: parent } = useList({
    resource: "parent",
  });

  return (
    <div className="">
      <Link to="/students/list" className="hover:text-yellow-400 font-semibold">
        List
      </Link>
      <h1 className="text-xl font-semibold">Edit Student</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder="Input first name"
              {...register("first_name")}
            />
          </div>

          <div className="">
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="Input last name"
              {...register("last_name")}
            />
          </div>

          <div className="">
            <Label>Student ID</Label>
            <Input
              type="text"
              placeholder="Input student ID"
              {...register("studentID")}
            />
          </div>

          <div className="">
            <Label>Gender</Label>
            <Input placeholder="Input gender" {...register("gender")} />
          </div>

          <div className="">
            <Label>Age</Label>
            <Input type="number" placeholder="Input age" {...register("age")} />
          </div>

          <div className="">
            <Label>Date of Birth</Label>
            <Input
              type="date"
              placeholder="Input date of birth"
              {...register("dob")}
            />
          </div>

          <div className="">
            <Label>Email</Label>
            <Input placeholder="Input email" {...register("email")} />
          </div>

          <div className="">
            <Label>Phone</Label>
            <Input placeholder="Input phone" {...register("phone")} />
          </div>

          <div className="">
            <Label>Subject</Label>
            <select
              id="subject"
              {...register("subject")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            >
              <option value="" selected disabled>
                Select subject...
              </option>
              {subject?.data.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <Label>Classes</Label>
            <select
              id="classes"
              {...register("classes")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            >
              <option value="" selected disabled>
                Select classes...
              </option>
              {classes?.data.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <Label>Parent</Label>
            <select
              id="parent"
              {...register("parent")}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            >
              <option value="" selected disabled>
                Select parent...
              </option>
              {parent?.data.map((parent) => (
                <option key={parent.id} value={parent.id}>
                  {parent.name}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <Label>Profile</Label>
            <Input
              type="file"
              placeholder="Upload profile"
              {...register("background")}
            />
          </div>
        </div>
        <Button type="submit" className="float-right" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  );
};
