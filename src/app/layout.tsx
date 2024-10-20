import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";

import Nav from "src/container/Nav";

import "../index.css";
import { RecoilProvider } from "src/container/RecoilProvider";

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
        <RecoilProvider>
          <div id="root" className="w-full min-h-screen bg-neutral-100">
            <Nav />
            {children}
          </div>
        </RecoilProvider>
      </body>
    </html>
  );
}
