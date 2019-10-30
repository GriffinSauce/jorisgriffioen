import React from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import theme from '../theme';

const Home = () => (
  <Layout>
    <header>
      <Logo />
      <h1>Joris Griffioen</h1>
      <p>Developer, guitarist.</p>
    </header>

    <Nav />

    <style jsx>{`
      header {
        margin: 0 0 50px 0;
      }
      header :global(svg) {
        margin: 50px 0 15px 0;
        width: 150px;
      }
      header h1,
      header p {
        margin: 0;
      }

      header p {
        font-size: 1.4rem;
      }
    `}</style>
  </Layout>
);

export default Home;
