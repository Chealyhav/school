import { useCreate } from "@refinedev/core";
import { Input } from "@/components/ui/input";
import { useForm } from "@refinedev/react-hook-form";
import { Person } from "./list";
import { FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import React from "react";

export const Create = () => {
  const {
    reset,
    register,
    handleSubmit,
    refineCore: { onFinish },
  } = useForm<Person>({
    refineCoreProps: {
      resource: "logo",
      action: "create",
    },
  });

  const onSubmit = (data: FieldValues) => {
    onFinish({
      // first_name: data.first_name,
      // last_name: data.last_name,
      // gender: data.gender,
      // dob: data.dob,
      // avatar: data.avatar[0].name,
      background:data.background
       // Assuming you only want to upload one file
    });
    // reset();
    console.log(data)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Input
          placeholder="First Name"
          {...register(`first_name`)}
          className="w-1/2"
        />
        <Input
          placeholder="Last Name"
          {...register(`last_name`)}
          className="w-1/2"
        />
        <input type="date" {...register(`dob`)} />
        <select {...register(`gender`)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="file" {...register("avatar")} /> */}
            <input type="file" {...register("background")} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};








// Import the necessary components
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils";
// import { CalendarIcon } from "lucide-react";

// // Define the Create component
// export const Create = () => {
//   // Form state and submission logic
//   const { reset, register, handleSubmit, refineCore: { onFinish } } = useForm<Person>({
//     refineCoreProps: {
//       resource: "test",
//       action: "create",
//     },
//   });

//   const [date, setDate] = React.useState<Date | undefined>(new Date());

//   const onSubmit = (data: any) => {
//     onFinish({
//       first_name: data.first_name,
//       last_name: data.last_name,
//       gender: data.gender,
//       dob: data.dob,
//     });
//     reset();
//     console.log(data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* First Name input */}
//         <Input
//           placeholder="First Name"
//           {...register(`first_name`)}
//           className="w-1/2"
//         />
//         {/* Last Name input */}
//         <Input
//           placeholder="Last Name"
//           {...register(`last_name`)}
//           className="w-1/2"
//         />
//         {/* Date of Birth date picker */}
//         <Popover>
//           <PopoverTrigger asChild>
//             <Button
//               variant={"outline"}
//               className={cn(
//                 "w-[280px] justify-start text-left font-normal",
//                 !date && "text-muted-foreground"
//               )}
//             >
//               <CalendarIcon className="mr-2 h-4 w-4" />
//               {date ? format(date, "PPP") : <span>Pick a date</span>}
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className="w-auto p-0">
//             <Calendar
//               mode="single"
//               selected={date}
//               onSelect={setDate}
//               initialFocus
//               {...register(`dob`)}
//             />
//           </PopoverContent>
//         </Popover>
    
//         <Select  {...register(`gender`)} defaultValue="Male" name="gender">
//           <SelectTrigger>
//             <SelectValue placeholder="Choose Gender" />
//           </SelectTrigger>
//           <SelectContent >
//             <SelectGroup>
//               <SelectItem value="Male">Male</SelectItem>
//               <SelectItem value="Female">Female</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//         {/* Submit button */}
//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// };
