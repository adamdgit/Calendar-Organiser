import React from "react";
import Header from "./Header";
import '../styles/globals.css';

export default function RootLayout({ children } : { children : React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}