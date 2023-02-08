import SlantedArrow from "../../public/Icon/SlantedArrow";
type HoverArrowProps = {
  hovered: boolean;
  size: string;
  initialFill: string;
  hoverFill: string;
};

import { motion, AnimatePresence } from "framer-motion";

export default function HoverArrow(props: HoverArrowProps) {
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      x: -10,
    },
    in: {
      opacity: 1,

      transition: {
        duration: 0.55,
      },
      x: 0,
    },
  };
  return (
    <div className="flex relative">
      <motion.div animate={{ scale: props.hovered ? 0.5 : 1 }}>
        {SlantedArrow(
          `${props.hovered ? props.hoverFill : props.initialFill} duration-300`,
          props.size,
          props.size
        )}
      </motion.div>
      <AnimatePresence>
        <motion.div
          key={props.hovered.toString()}
          variants={variants}
          animate="in"
          initial="out"
          exit={"out"}
          className="flex"
        >
          {props.hovered && (
            <div className="flex absolute">
              <motion.div initial={{ scale: 0.7 }}>
                {SlantedArrow(
                  `${
                    props.hovered ? props.hoverFill : props.initialFill
                  } duration-300`,
                  props.size,
                  props.size
                )}
              </motion.div>
              <div>
                {SlantedArrow(
                  `${
                    props.hovered ? props.hoverFill : props.initialFill
                  } duration-300`,
                  props.size
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
