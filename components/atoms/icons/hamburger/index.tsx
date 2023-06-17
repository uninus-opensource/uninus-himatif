import { FC, ReactElement } from "react";
import { THamburgerProps } from "./type";
import { motion, AnimatePresence } from "framer-motion";

export const HamburgerIcon: FC<THamburgerProps> = (props): ReactElement => {
  return (
    <AnimatePresence>
      {props.open ? (
        <motion.svg
          style={{
            width: 32,
            height: 32,
          }}
          animate={{
            x: [100, 0],
          }}
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </motion.svg>
      ) : (
        <motion.svg
          style={{
            width: 32,
            height: 32,
            x: 100,
          }}
          animate={{
            x: [200, 0],
          }}
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </motion.svg>
      )}
    </AnimatePresence>
  );
};
