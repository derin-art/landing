import GradientBlob from "../../public/Icon/Gradient_blob.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import blobAnimation from "../../public/Icon/blobGreen.svg";

export default function FifthPage() {
  const animatedSvg = () => {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="100%"
        id="blobSvg"
        filter="blur(0px)"
        style={{ opacity: 1 }}
      >
        {" "}
        <defs>
          {" "}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            {" "}
            <stop
              offset="0%"
              style={{ stopColor: "rgb(49, 229, 36)" }}
            ></stop>{" "}
            <stop
              offset="100%"
              style={{ stopColor: "rgb(40, 210, 122)" }}
            ></stop>{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <path id="blob" fill="url(#gradient)" style={{ opacity: "0.99" }}>
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z"
          ></animate>
        </path>
      </svg>
    );
  };

  const svsv = () => {
    return (
      <svg
        viewBox="0 0 100 100"
        height={"100"}
        width={"100"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="fill" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#3027de"></stop>
            <stop offset="100%" stop-color="#7b8cff"></stop>
          </radialGradient>
        </defs>
        <path
          d="M86,71Q74,92,50.5,90.5Q27,89,15,69.5Q3,50,16.5,33Q30,16,51,14.5Q72,13,85,31.5Q98,50,86,71Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#fill)"
        ></path>
      </svg>
    );
  };
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11.5 3v8.5H3V3h8.5zm0 18H3v-8.5h8.5V21zm1-18H21v8.5h-8.5V3zm8.5 9.5V21h-8.5v-8.5H21z" />
  </svg>;

  const [trigger, setTrigger] = useState(false);

  const svgPaths = [
    [
      {
        name: "GooglePlay",
        path: "M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z",
      },
      {
        name: "windows",
        path: "M11.5 3v8.5H3V3h8.5zm0 18H3v-8.5h8.5V21zm1-18H21v8.5h-8.5V3zm8.5 9.5V21h-8.5v-8.5H21z",
      },
      {
        name: "Apple",
        path: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM8.823 15.343c-.395-.477-.886-.647-1.479-.509l-.15.041-.59 1.016a.823.823 0 0 0 1.366.916l.062-.093.79-1.371zM13.21 8.66c-.488.404-.98 1.597-.29 2.787l3.04 5.266a.824.824 0 0 0 1.476-.722l-.049-.1-.802-1.392h1.19a.82.82 0 0 0 .822-.823.82.82 0 0 0-.72-.816l-.103-.006h-2.14L13.44 9.057l-.23-.396zm.278-3.044a.825.825 0 0 0-1.063.21l-.062.092-.367.633-.359-.633a.824.824 0 0 0-1.476.722l.049.1.838 1.457-2.685 4.653H6.266a.82.82 0 0 0-.822.822c0 .421.312.766.719.817l.103.006h7.48c.34-.64-.06-1.549-.81-1.638l-.121-.007h-2.553l3.528-6.11a.823.823 0 0 0-.302-1.124z",
      },
    ],

    [
      {
        name: "PlayStation",
        path: "M22.584 17.011c-.43.543-1.482.93-1.482.93l-7.833 2.817V18.68l5.764-2.057c.655-.234.755-.566.223-.74-.53-.175-1.491-.125-2.146.111l-3.84 1.354v-2.155l.22-.075s1.11-.394 2.671-.567c1.56-.172 3.472.024 4.972.593 1.69.535 1.88 1.323 1.451 1.866zm-8.57-3.537V8.162c0-.624-.114-1.198-.699-1.36-.447-.144-.725.272-.725.895V21l-3.584-1.139V4c1.524.283 3.744.953 4.937 1.355 3.035 1.043 4.064 2.342 4.064 5.267 0 2.851-1.758 3.932-3.992 2.852zm-11.583 4.99c-1.735-.49-2.024-1.51-1.233-2.097.731-.542 1.974-.95 1.974-.95l5.138-1.83v2.086l-3.697 1.325c-.653.234-.754.566-.223.74.531.175 1.493.125 2.147-.11l1.773-.644v1.865l-.353.06c-1.774.29-3.664.169-5.526-.445z",
      },
      {
        name: "X-box",
        path: "M5.418 19.527A9.956 9.956 0 0 0 12 22a9.967 9.967 0 0 0 6.585-2.473c1.564-1.593-3.597-7.257-6.585-9.514-2.985 2.257-8.15 7.921-6.582 9.514zm9.3-12.005c2.084 2.468 6.237 8.595 5.064 10.76A9.952 9.952 0 0 0 22 12.003a9.958 9.958 0 0 0-2.975-7.113s-.022-.018-.068-.035a.686.686 0 0 0-.235-.038c-.493 0-1.654.362-4.004 2.705zM5.045 4.856c-.048.017-.068.034-.072.035A9.963 9.963 0 0 0 2 12.003c0 2.379.832 4.561 2.218 6.278C3.05 16.11 7.2 9.988 9.284 7.523 6.934 5.178 5.771 4.818 5.28 4.818a.604.604 0 0 0-.234.039v-.002zM12 4.959S9.546 3.523 7.63 3.455c-.753-.027-1.212.246-1.268.282C8.149 2.538 10.049 2 11.987 2H12c1.945 0 3.838.538 5.638 1.737-.056-.038-.512-.31-1.266-.282-1.917.068-4.372 1.5-4.372 1.5v.004z",
      },
      {
        name: "Mac",
        path: "M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z",
      },
    ],
  ];
  console.log("trigger", trigger);
  return (
    <div className="h-screen w-full z-30 bg-stone-100 flex items-center justify-center flex-col overflow-hidden">
      <div className="font-Neue mb-2 text-3xl z-30">
        We mean <span className="text-blueLow">Every</span>where
      </div>

      <img
        className="absolute lg:w-[400px] lg:h-[400px]"
        src={blobAnimation.src}
      ></img>
      <motion.div
        onViewportEnter={() => {
          setTrigger(true);
        }}
        onViewportLeave={() => {
          setTrigger(false);
        }}
        className="flex  space-x-2"
      >
        {svgPaths.map((item, index) => {
          return (
            <div key={index} className="flex-col flex space-y-2">
              {item.map((svg) => {
                return (
                  <div
                    key={svg.name}
                    className=" p-6 lg:p-8 z-40 rounded-3xl bg-white bg-opacity-25 border border-gray-400"
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="50"
                      height="50"
                      fill="none"
                    >
                      <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
                      <motion.path
                        stroke="rgb(82 82 82)"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={
                          trigger ? { pathLength: 1 } : { pathLength: 0 }
                        }
                        transition={{ duration: 1.6 }}
                        d={svg.path}
                      />
                    </motion.svg>
                  </div>
                );
              })}
            </div>
          );
        })}
      </motion.div>
      <div className="text-xs mt-4 text-center font-Inter px-8 ">
        Click on the icons to navigate to download their dedicated app
      </div>
    </div>
  );
}