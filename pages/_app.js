if (process.env.NODE_ENV !== 'production') {
    require('../src/mocks')
  }
  
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  export default MyApp
  