import React from "react";
import { router } from '@inertiajs/react';
import styles from './CustomButton.module.css';

export default function CustomButton({ children, to, className }) {

  return (
    <button
      onClick={() => router.visit(to)}
      className={`${styles.gradientButton} font-cairo font-bold text-white border-[2px] border-[#d2d2d214] font-bold ${className}`}
    >
      {children}
    </button>
  );
}
