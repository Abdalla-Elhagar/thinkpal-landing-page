"use client"
import React from 'react'
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  onClick: any;
  textColor: string;
  bgColor: string;
  styles: string;
};

export default function MyButton({ text, onClick, textColor, bgColor, styles }: ButtonProps) {
  return (
    <motion.button aria-label={text} whileHover={{scale: 1.03}} transition={{duration: 0.3}} style={{color: textColor, backgroundColor: bgColor}} className={`px-6 py-3 font-bold rounded-lg border border-main ${styles}`} onClick={onClick}>{text}</motion.button>
  );
}