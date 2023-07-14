export default function RootLayout({children} : {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <title>Blog Start</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}