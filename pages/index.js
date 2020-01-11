import React from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Links from '../components/Links';
import LinksBands from '../components/LinksBands';
import theme from '../theme';

const Home = () => (
  <Layout>
    <header>
      <img className="avatar" alt="Joris Griffioen" src="/avatar.jpg" />
      <h1>Joris Griffioen</h1>
      <p>Developer, guitarist.</p>
    </header>

    <section>
      <h2>
        <Logo />
      </h2>
      <Links />
    </section>

    <section>
      <h2>
        <a href="/music">
          <img alt="" src="icon-music.svg" />
          <span>Music</span>
        </a>
      </h2>
      <LinksBands />
    </section>

    <style jsx>{`
      header {
        margin: 0 0 50px 0;
      }

      header img {
        margin: 50px 0 15px 0;
      }

      header h1,
      header p {
        margin: 0;
      }

      header p {
        font-size: 1.4rem;
      }

      .avatar {
        width: 100px;
        border-radius: 100px;
      }

      h2 {
        margin: 30px 0;
        width: 100%;
      }

      h2 a img {
        vertical-align: middle;
        margin: 0 5px 0 0;
        height: 28px;
      }
    `}</style>
  </Layout>
);

export default Home;
