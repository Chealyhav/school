
import Header from "@/components/school-web/header"
import { Login } from "../../../pages/login"
import { PropsWithChildren } from "react"



export const LayoutHomepage: React.FC<PropsWithChildren> = ({ children }) => {
    return(
        <div className="">
           <div className="h-2 w-full bg-red-300"><h1>contact</h1></div>
           <Header/>
           <div className="">{children}</div>
            {/* <Login/> */}
            <h1>Home page</h1>
        </div>
    )
}