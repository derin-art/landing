import "../styles/globals.css";
import Wrapper from "../components/Wrapper";
import Header from "../components/header";
import { Lora } from "@next/font/google";
import { Poppins } from "@next/font/google";
import dynamic from "next/dynamic";
import { Arsenal } from "@next/font/google";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const isHome = router.pathname === "/";
  return (
    <Wrapper>
      <AnimatedCursor
        innerSize={isHome ? 25 : 14}
        outerSize={isHome ? 40 : 46}
        outerAlpha={0.2}
        innerScale={0.7}
        innerStyle={{
          filter: "blur(var(--innerBlur))",
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          filter: "blur(var(--blur))",
          backgroundColor: "var(--outerColor)",
          opacity: 0.4,
        }}
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
