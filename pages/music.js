import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Music from '../components/Music';

const MusicPage = () => (
  <Layout>
    <Head>
      <title>Music</title>
      <meta
        key="og:url"
        property="og:url"
        content="https://joris.rocks/music"
      />
      <meta key="description" name="description" content="My bands" />
      <meta key="og:description" property="og:description" content="My bands" />
    </Head>

    <Link href="/">
      <a className="flex-center gap-3 bg-black py-6">
        <Logo width={80} />
        <div>
          <h1>Music</h1>
          <p>Joris Griffioen</p>
        </div>
      </a>
    </Link>

    <main className="mt-12 grid gap-16 sm:gap-20 text-center ">
      <Music />
    </main>
  </Layout>
);

export default MusicPage;
