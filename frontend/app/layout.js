import "./globals.css";

export const metadata = {
  title: "S&P Global — Essential Intelligence",
  description:
    "Data, analytics and benchmarks that power the decisions behind the world's financial markets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
