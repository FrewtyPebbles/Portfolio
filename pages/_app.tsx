import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  //const [projects, set_projects] = React.useState<Project[]>();
  return <Component {...pageProps} />
}
