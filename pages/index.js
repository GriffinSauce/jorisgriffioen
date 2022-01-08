import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Links from '../components/Links';
import LinksBands from '../components/LinksBands';

const Home = () => (
  <Layout>
    <header>
      <div className="flex-center gap-3 bg-black py-6">
        <Logo width={80} />
        <div>
          <h1>Joris Griffioen</h1>
          <p>Developer, guitarist.</p>
        </div>
      </div>

      <Image
        src="/hero.jpg"
        alt="On stage with Left Alive"
        layout="responsive"
        width={600}
        height={400}
        quality={90}
        priority
      />
    </header>

    <section className="bg-black my-3">
      <Links />
    </section>

    <section className="mx-6">
      <LinksBands />
    </section>

    <footer className="text-sm text-gray-600 py-6 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/GriffinSauce/jorisgriffioen"
      >
        <img
          className="inline-block w-3 align-middle opacity-50"
          alt="github"
          src="icon-github.svg"
        />{' '}
        source
      </a>
      <span> - artwork by Evelien Griffioen</span>
    </footer>
  </Layout>
);

export default Home;
