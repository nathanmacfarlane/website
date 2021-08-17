import * as React from "react";
import '../styles/Line.scss';
import { motion } from "framer-motion";

export const Line = () => 
    <motion.div 
        className="line" 
        animate={{ width: 200 }} 
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
    />