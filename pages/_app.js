import "../styles/globals.css";
import Wrapper from "../components/Wrapper";
import Header from "../components/header";
import { Lora } from "@next/font/google";
import { Poppins } from "@next/font/google";
import dynamic from "next/dynamic";
import { Arsenal } from "@next/font/google";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const ArsenalFont = Arsenal({ weight: "400", subsets: ["latin"] });
export const lora = Lora({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
});

export const loraI = Lora({
  subsets: ["latin"],
  style: ["italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <AnimatedCursor
        innerSize={14}
        outerSize={24}
        color="192, 132, 252"
        outerAlpha={0.2}
        innerScale={0.7}
        innerStyle={{}}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "img",
        ]}
      />
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --lora-font: ${lora.style.fontFamily};
            --Arsenal-font: ${ArsenalFont.style.fontFamily};
            --loraI-font: ${loraI.style.fontFamily};
            --poppins-font: ${poppins.style.fontFamily};
          }
        `}
      </style>
    </Wrapper>
  );
}
