import Face1 from "../../public/images/Face1.jpg";
import Face2 from "../../public/images/Face2.jpg";
import Face3 from "../../public/images/Face3.jpg";
import Face4 from "../../public/images/Face4.jpg";
import Face5 from "../../public/images/Face5.jpg";
import Image from "next/image";

export default function ThirdPage() {
  const images = [
    [
      { img: Face3, name: "Face3" },
      { img: Face4, name: "Face4" },
    ],
    [
      { img: Face1, name: "Face1" },
      { img: Face2, name: "Face2" },
    ],
  ];
  return (
    <div className="h-screen w-full bg-stone-100 flex items-center flex-col justify-center relative">
      <div className=" absolute -left-10">
        <div className="font-Neue text-3xl mb-4 ml-12  text-right">
          Connect with Friends around the{" "}
          <span className="text-orangeLow">world</span>
        </div>
        <div className="flex   space-x-2 ">
          {images.map((col, index) => {
            return (
              <div key={index} className={`${index === 1 ? "mt-8" : ""}  `}>
                {col.map((img) => {
                  return (
                    <div key={img.name} className="">
                      <Image
                        src={img.img.src}
                        key={img.name}
                        width={120}
                        height={120}
                        alt="User Image"
                        unoptimized={true}
                        className="w-[150px] h-[150px] border rounded-3xl shadow-md mb-2 border-gray-200"
                      ></Image>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
