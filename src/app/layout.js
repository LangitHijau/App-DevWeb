
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Dev",
  description: "Njir",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
