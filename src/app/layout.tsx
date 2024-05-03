import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";

import "../index.css";

export const metadata: Metadata = {
  title: "Hello Hello",
  description: "Blog.",
};

const gothicA1 = Gothic_A1({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gothicA1.className}>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
