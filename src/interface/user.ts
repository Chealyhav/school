export interface UserProps {
    id:string | number;
    uid: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    role: number;
    date_joined: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
  }
  