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