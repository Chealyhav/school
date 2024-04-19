import { API_URL } from "@/App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GetManyResponse,
  HttpError,
  useMany,
  useNavigation,
  useOne,
} from "@refinedev/core";
import UploadImage from "./file";

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
}

export const List = () => {
  const { data, isLoading, isError } = useOne<Person, HttpError>({
    resource: "test",
    id: 10,
  });
  console.log(data?.data.avatar);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      <UploadImage/>
      <Input  aria-braillelabel="" placeholder="input text" type="text" className="w-1/2"/>
      <div className="border">{data?.data.id}</div>
      <img src={`${API_URL}${data.data.avatar}`} alt="" className="w-20 h-20 bg-red-400" />
      <div className="border">{data.data.first_name}</div>
      <div className="border">{data.data.last_name}</div>
      <div className="border">{data.data.contact}</div>
      <div className="border">{data.data.dob}</div>
      <div className="border">{data.data.gender}</div>
    </div>
  );
};
