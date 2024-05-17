import React from 'react'
import Head from 'next/head'

const Seo = ({ page = '' }) => {
  return (
    <Head>
      <title>Miss Roy | {page ? page : 'Home'}</title>
      <title>Miss Roy | Home</title>
      <meta name="description" content="Miss Roy" />


      <meta property="og:url" content="https://www.missroy.org/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Miss Roy | Home" />
      <meta property="og:description" content="Welcome to Miss Roy, a beautiful place right here in Ogden, Utah. Come see us and see it for yourself." />
      <meta property="og:image" content="/preview_card2024.png" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="60b9-24-2-105-71.ngrok.io" />
      <meta property="twitter:url" content="https://www.missroy.org/" />
      <meta name="twitter:title" content="Miss Roy | Home" />
      <meta name="twitter:description" content="Welcome to Miss Roy, a beautiful place right here in Ogden, Utah. Come see us and see it for yourself." />
      <meta name="twitter:image" content="/preview_card2024.png" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
  )
}

export default Seo
