import { type } from "os";
import Header from "../components/header";
type WrapperProps = { children: any };

export default function Wrapper(props: WrapperProps) {
  return (
    <div className="h-screen w-full ">
      <div className="fixed w-full left-0 z-50 ">
        <Header></Header>
      </div>
      {props.children}
    </div>
  );
}
