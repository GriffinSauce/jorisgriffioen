import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Links from '../components/Links';
import LinksBands from '../components/LinksBands';

const Home = () => (
  <Layout>
    <header>
      <div className="avatar">
        <Image
          src="/avatar.jpg"
          alt="Joris Griffioen"
          width="100px"
          height="100px"
          quality={90}
        />
      </div>

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
        <Link href="/music">
          <a>
            <img alt="" src="icon-music.svg" />
            <span>Music</span>
          </a>
        </Link>
      </h2>
      <LinksBands />
    </section>

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

      .avatar {
        margin: 50px 0 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .avatar :global(img) {
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
