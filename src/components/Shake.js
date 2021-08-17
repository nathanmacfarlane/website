import * as React from "react";
import { motion } from "framer-motion";

export const Shake = ({ children }) => {
    return (
        <motion.div
            animate={{
                rotate: [0, 15, -15, 0],
            }}
            transition={{
                type: "spring",
                duration: 0.3,
                ease: "linear",
                repeat: Infinity,
                delay: 0.5,
                repeatDelay: 2.0,
                repeatType: "mirror"
            }}
            // style={{ backgroundColor: "red" }}
        >
            {children}
        </motion.div>
    )
}