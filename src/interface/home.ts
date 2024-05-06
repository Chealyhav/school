export interface BannerHomeProps{
    id:string;
    title:string;
    subtitle:string;
    des:string;
    background:string;
}
export interface BannerProps{
    id:string;
    image:string;

}
export interface ClassesProps{
    id: number;
    name: string;
    classCode: string;
    background: string;
    des: string;
    price: string;
    duration: string;
    subtitle: string | null;
    sessions: string;
    created_at: string;
    updated_at: string;
}
export interface BlogProps{
    id:string;
    title:string;
    subtitle:string;
    des:string;
    background:string;
}

export interface StudentProps {
    id:string;
    firstName: string;
    lastName: string;
    age?: number | null;
    gender?: string | null;
    dob?: string | null;
    subject?: string | null;
    email?: string | null;
    registrationDate?: string | null;
    phone?: string | null;
    studentID: string;
    profile?: File | null;
  }


export interface GroupProps{
    id:string;
    name:string;
    subtitle:string;
}

export interface AboutProps{
  id: string;
  title: string | null;
  background: string | null; // URL to the image
  des: string | null;
  subtitle: string | null;
  vision_title: string | null;
  vision_des: string | null;
  vision_logo: string | null; // URL to the image
  mission_title: string | null;
  mission_des: string | null;
  mission_logo: string | null; // URL to the image
  value_title: string | null;
  value_des: string | null;
  value_logo: string | null; // URL to the image
  created_at: string; // Date string
  updated_at: string; // Date string
}


export interface Class {
    id: number;
    name: string | null;
    classCode: string | null;
    background: string | null;
    des: string | null;
    price: string | null;
    duration: string | null;
    subtitle: string | null;
    sessions: string | null;
    created_at: string;
    updated_at: string;
  }
  export interface ContactProps {
    id: string;
    background: string | null;
    des: string | null;
    title: string | null;
    subtitle: string | null;
    email: string | null;
    facebook: string | null;
    telegram: string | null;
    instagram: string | null;
    phone_number: string | null;
    map: string | null;
    created_at: string;
    updated_at: string;
  }
  
  export interface BlogProps {
    background: string; 
    des: string ;
    title: string ;
    subtitle: string ;
    created_at: string; 
    updated_at: string; 
}
