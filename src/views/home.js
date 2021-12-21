import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Principal Assurance Coordinator</title>
        <meta property="og:title" content="Principal Assurance Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
