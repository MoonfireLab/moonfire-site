import "./globals.css";

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
