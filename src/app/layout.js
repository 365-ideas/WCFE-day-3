import { useContext } from "react";
import localFont from "next/font/local";
import "@/styles/reset.scss";
import { LoaderProvider } from "@/providers/LoaderProvider/LoaderProvider";
import { Root } from "./root";

const inter = localFont({
  src: [
    {
      path: './fonts/RobotoCondensed-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/RobotoCondensed-Medium.ttf',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--font-roboto'
});

export const metadata = {
  title: "We'a Creating For Emotions",
  description: "We'a Creating For Emotions | Project #3",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={`body ${inter.variable}`}>
        <LoaderProvider>
          <Root>
            {children}
          </Root>
        </LoaderProvider>
      </body>
    </html>
  );
}
