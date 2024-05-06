import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

export const CreateStudent: React.FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    refineCore: { onFinish },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("dob", data.dob);
      formData.append("gender", data.gender);
      formData.append("age", data.age);
      formData.append("subject", data.subject);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("studentID", data.studentID);
      formData.append("group", data.group);
      formData.append("classes", data.classes);
      formData.append("background", data.background[0]);

      await onFinish(formData);
      reset();
      console.log("Data posted successfully");
      console.log(formData);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-xl font-semibold">Student List</h1>
      <div className="flex justify-between py-2">
        <Link
          to="/student/list"
          className="hover:text-yellow-400 font-semibold"
        >
          List
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder="input title"
              {...register("first_name")}
              name="first_name"
            />
          </div>

          <div className="">
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="input title"
              {...register("last_name")}
              name="last_name"
            />
          </div>

          <div className="">
            <Label>Gender</Label>
            <Input
              placeholder="type your description here..."
              {...register("gender")}
              name="gender"
            />
          </div>

          <div className="">
            <Label>Age</Label>
            <Input
              type="date"
              placeholder="type your description here..."
              {...register("age")}
              name="age"
            />
          </div>
          <div className="">
            <Label>Email</Label>
            <Input
              placeholder="type your description here..."
              {...register("email")}
              name="email"
            />
          </div>
          <div className="">
            <Label>Phone</Label>
            <Input
              placeholder="type your description here..."
              {...register("phone")}
              name="phone"
            />
          </div>
          <div className="">
            <Label>Subject</Label>
            <Input
              placeholder="type your description here..."
              {...register("subject")}
              name="subject"
            />
          </div>
          <div className="">
            <Label>Classes</Label>
            <Input
              placeholder="type your description here..."
              {...register("classes")}
              name="classes"
            />
          </div>
          <div className="">
            <Label>Group</Label>
            <Input
              placeholder="type your description here..."
              {...register("group")}
              name="group"
            />
          </div>
          <div className="">
            <Label>Profile</Label>
            <Input
              type="file"
              placeholder="input background "
              {...register("background")}
              name="background"
            />
          </div>
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};
