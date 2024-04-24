import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";

export const Create = () => {
  const { reset, register, handleSubmit, refineCore: { onFinish } } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("image", data.image[0]);

      // Use the onFinish method to create a new record with the file data
      await onFinish(formData);
      reset();
      console.log("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("image")} />
        <input type="text" {...register("title")} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};




// export const Create = () => {
//   const {
//     reset,
//     register,
//     handleSubmit,
//     refineCore: { onFinish },
//   } = useForm<Person>({
//     refineCoreProps: {
//       resource: "about",
//       action: "create",
//     },
//   });

//   const onSubmit = (data: FieldValues) => {
//     const formData = new FormData();
//     formData.append("background", data.background[0]);  

//     onFinish({
//       ...data,
//       background: formData,
//     });
//     reset();
//     console.log(data)
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="file" {...register("background")} />
//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// };
