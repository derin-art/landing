import Gradient_blob from "../../public/Icon/Gradient_blob.svg";
import DeepOrangeblob from "../../public/Icon/DeepOrange.svg";
import DeepBlueblob from "../../public/Icon/DeepBlue.svg";

export default function FirstPage() {
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

  const finalSvg = () => {
    return (
      <svg
        viewBox="0 0 100 100"
        height={100}
        width={100}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="fill"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientTransform="rotate(103 0.5 0.5)"
          >
            <stop offset="0%" stop-color="#c8c7d3"></stop>
            <stop offset="100%" stop-color="#c8c8c8"></stop>
          </linearGradient>
        </defs>
        <path
          d="M73,64.5Q67,79,52,75.5Q37,72,25.5,61Q14,50,22,32.5Q30,15,51.5,13Q73,11,76,30.5Q79,50,73,64.5Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#fill)"
        ></path>
      </svg>
    );
  };

  const svsvHey = () => {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="linearGradientId"
            gradientTransform="rotate(-45 0.5 0.5)"
          >
            <stop offset="0%" stop-color="#ff5d3b" />
            <stop offset="100%" stop-color="#ff8526" />
          </linearGradient>

          <clipPath id="shape">
            <path
              fill="currentColor"
              d="M780.5,648.5Q671,797,482.5,826.5Q294,856,218.5,678Q143,500,218.5,321.5Q294,143,494.5,152Q695,161,792.5,330.5Q890,500,780.5,648.5Z"
            ></path>
          </clipPath>
        </defs>

        <g clip-path="url(#shape)">
          <path
            fill="url(#linearGradientId)"
            d="M780.5,648.5Q671,797,482.5,826.5Q294,856,218.5,678Q143,500,218.5,321.5Q294,143,494.5,152Q695,161,792.5,330.5Q890,500,780.5,648.5Z"
          />
        </g>
      </svg>
    );
  };
  return (
    <div className="h-screen w-full bg-transparent flex items-center justify-center z-30 backdrop-blur-lg">
      <div className="absolute -left-10 -top-10">{svsv()}</div>
      <img
        src={DeepOrangeblob.src}
        className="absolute w-96 h-96 lg:w-[500px] lg:h-[500px] "
      ></img>

      <img
        className="absolute -bottom-0 left-10 h-40 w-40 "
        src={Gradient_blob.src}
      ></img>
      <div className="relative w-full h-full flex items-center justify-center backdrop-blur-lg z-30">
        <div className="font-Marcel text-5xl lg:text-8xl px-14 p-10  relative z-30 backdrop-blur-lg text-white">
          Ignite
        </div>
      </div>
    </div>
  );
}
