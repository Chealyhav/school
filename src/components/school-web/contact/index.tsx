import { API_URL } from "@/api/url";
import { useList } from "@refinedev/core";
import { Banner } from "../banner";
import { IconBrandFacebookFilled } from "@tabler/icons-preact";

export const CardContact: React.FC = () => {
  const { data } = useList({
    resource: "contact",
  });

  return (
    <div className="py-8">
      <div className="">
        <Banner content="Contact " link="contact" />
      </div>
      {/* <div className="h-2/4 w-full">
        <iframe
          className="w-full h-1/2"
          src={data?.data[0].map || ""}
          loading="lazy"
        ></iframe>
      </div> */}
      <div className="container">
        {data?.data.map((x) => (
          <div  key={x.id} className="">
            <h1 className="text-xl font-semibold border-b-2 border-yellow-600 py-2">Contact Info</h1>
            <div  className="flex">
              <div className="basis-1/2 aspect-w-7 aspect-h-2">
                <img
                  src={`${API_URL}${x.background}`}
                  alt={x.title}
                  className="object-fill"
                />
              </div>

              <div className="flex flex-col justify-center p-4">

                <div className="border-b-2 py-4">
                  {/* <a href={data?.data[0].facebook}><IconBrandFacebookFilled />Facebook</a> */}
                </div>
                <div className="border-b-2 py-4">
                  <a >Facebook</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
