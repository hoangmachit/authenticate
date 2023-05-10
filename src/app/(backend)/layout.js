export const metadata = {
  title: 'Admin',
  description: 'Admin by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
