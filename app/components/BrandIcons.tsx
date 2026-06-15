"use client";

import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const Instagram = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Youtube = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
  </svg>
);

export const Facebook = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Whatsapp = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M22 11.08c0 5-4.08 9.08-9.08 9.08a8.96 8.96 0 0 1-4.64-1.28l-4.78 1.56 1.58-4.64A8.96 8.96 0 0 1 3.84 11.1 9.08 9.08 0 0 1 12.92 2c5 0 9.08 4.08 9.08 9.08z" />
    <path d="M17.47 14.39c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08a9.06 9.06 0 0 1-3.79-3.79c-.15-.3 0-.47.15-.62.13-.13.3-.3.45-.45.15-.15.2-.25.3-.45.1-.2.05-.38-.03-.53-.08-.15-.68-1.62-.93-2.23-.24-.6-.53-.52-.73-.53-.18 0-.4 0-.62.05-.22.05-.58.2-.88.52a3.8 3.8 0 0 0-1.2 2.8c0 1.76 1.28 3.47 1.46 3.7.18.23 2.5 3.83 6.07 5.37.85.37 1.51.59 2.03.76.86.27 1.64.23 2.25.14.68-.1 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.26-.2-.56-.35z" fill="currentColor" stroke="none" />
  </svg>
);
