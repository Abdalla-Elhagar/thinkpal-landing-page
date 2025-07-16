import React from 'react'

interface ButtonProps {
  text: string;
  onClick: any;
  textColor: string;
  bgColor: string;
};

export default function MyButton({ text, onClick, textColor, bgColor }: ButtonProps) {
  return (
    <button style={{color: textColor, backgroundColor: bgColor}} className={`px-6 py-3 font-bold rounded-lg`} onClick={onClick}>{text}</button>
  );
}