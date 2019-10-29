import React from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import theme from '../theme';

const Home = () => (
  <Layout>
    <Logo />

    <header>
      <h1>Joris Griffioen</h1>
      <p>Developer, guitarist.</p>
    </header>

    <Nav />

    <p className="art-credit">Griffin artwork by Evelien Griffioen</p>

    <style jsx>{`
      header {
        margin: 0 0 50px 0;
      }
      header h1,
      header p {
        margin: 0;
      }

      header p {
        font-size: 1.4rem;
      }

      .art-credit {
        margin-top: 30px;
        font-size: 0.7rem;
        color: ${theme.color4};
      }
    `}</style>
  </Layout>
);

export default Home;
