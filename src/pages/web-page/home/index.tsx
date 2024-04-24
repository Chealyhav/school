import { BannerHome } from "@/components/school-web/home/banner"

export const HomePage:React.FC = ()=>{
    return(
        <div className="bg-gray-400 w-full pt-12">
            <BannerHome/>
            <div className=" h-20 bg-red-400 mx-2"></div>

            <h1 className=" h-80">home</h1>
    
        </div>
    )
}