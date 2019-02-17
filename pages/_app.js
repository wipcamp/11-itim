import React from 'react'
import App, { Container } from 'next/app'
import 'antd/dist/antd.css'
import GlobalStyle from '../components/Core/GlobalStyle'
import Router from 'next/router'
import Head from 'next/head'


export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>สมัครค่าย WIP Camp #11 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}
