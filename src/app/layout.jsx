import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Moonfire Lab",
  description: "Moonfire Lab website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
