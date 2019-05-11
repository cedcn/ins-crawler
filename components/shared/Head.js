import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = '描述'
const defaultOGURL = 'https://xx.net/'
const defaultOGImage =
  'https://cdn.jinshuju.net/assets/og_logo-a7722a735419dc438aae9075af9db93c3b4677092a3c35fa59c6ab7fb65b5000.png'

const Head = (props) => {
  const title = props.title ? `${props.title} - xx` : 'xx'
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="google-site-verification" content="YRJATDZ0dwPuF7Eu9fSSluaW-TMItbWdRPYVY5U4qTY" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
      />
      <meta name="keywords" content="" />
      <link id="favicon" rel="icon" href="/static/favicon.ico" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default Head
