import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

export const EditParent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, reset, refineCore: { onFinish } } = useForm<FieldValues>({
    refineCoreProps: {
      resource: "parent",
      action: "edit",
      id: id,
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      await onFinish(data);
      reset();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <Link to="/parent" className="hover:text-yellow-400 font-semibold">List</Link>
      <h1 className="text-xl font-semibold">Edit Parent</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Label>Name</Label>
            <Input type="text" placeholder="Name" {...register("name", { required: true })} />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" {...register("email", { required: true })} />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="Phone Number" {...register("phone_number", { required: true })} />
          </div>
          <div>
            <Label>Address</Label>
            <Textarea placeholder="Address" {...register("address", { required: true })} />
          </div>
        </div>
        <Button type="submit" className="float-right mt-4 bg-green-600 hover:bg-green-500">Save</Button>
      </form>
    </div>
  );
};
