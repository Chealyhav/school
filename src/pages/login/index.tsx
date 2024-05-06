import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@refinedev/core";
import { useState } from "react";
interface LoginProps {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { mutate } = useLogin<LoginProps>();
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    mutate({
      email,
      password,
    });
    console.log(formData);
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-center text-red-600 font-semibold">SING IN</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              User Name
            </Label>
            <Input
              id="email"
              placeholder="email"
              className="col-span-3"
              name="email"
              type="email"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              password
            </Label>
            <Input
              id="password"
              className="col-span-3"
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
