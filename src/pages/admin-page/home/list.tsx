import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HttpError, useDelete, useOne } from "@refinedev/core";
import UploadImage from "./file";
import { Link } from "react-router-dom";


export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  avatar: string;
  contact: string;
  active: boolean;
  description: string;
  image: string;
  title: string;
}

export const List = () => {

  const { mutate } = useDelete();  
  const { data, isLoading, isError } = useOne<Person, HttpError>({
    resource: "image",
    id: 8,
  });

 

  const handleDelete = () => {
    mutate({  
      id:8,  
      resource: "image",  
      }) 
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      <Button onClick={handleDelete}>Delete</Button>
      <Button><Link to="/image/create">Create</Link></Button>
      <UploadImage />
      <Input aria-braillelabel="" placeholder="input text" type="text" className="w-1/2" />
      <div className="border">{data?.data.title}</div>
      <img src={`${API_URL}${data.data.image}`} alt="" className="w-20 h-20 bg-red-400" />
    </div>
  );
}
