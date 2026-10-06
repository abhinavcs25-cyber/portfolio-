import "./globals.css";

export const metadata = {
  title: "Abhinav — Computer Science Engineering Student",
  description:
    "Abhinav's portfolio: computer science projects, technical skills, cybersecurity interests, and learning journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
