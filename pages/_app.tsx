import React from "react";
import './app.css'
import { NextUIProvider} from '@nextui-org/react'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
