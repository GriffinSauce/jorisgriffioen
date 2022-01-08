import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Links from '../components/Links';
import Music from '../components/Music';
import Projects from '../components/Projects';

const Home = () => (
  <Layout>
    <header>
      <div className="gap-3 py-6 bg-black flex-center">
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

    <section className="my-3 bg-black">
      <div className="sm:w-[80vw] mx-auto">
        <Links />
      </div>
    </section>

    <section className="grid gap-16 mt-12 text-center sm:gap-20 ">
      <h2 id="music" className="text-left border-b-2">
        <div className="w-[80vw] mx-auto">
          <div className="inline-block px-3 pb-1 text-black -skew-x-3 bg-white">
            Music
          </div>
        </div>
      </h2>

      <Music />
    </section>

    <section className="grid gap-8 mt-12 text-center sm:gap-8 ">
      <h2 id="projects" className="text-left border-b-2">
        <div className="w-[80vw] mx-auto">
          <div className="inline-block px-3 pb-1 text-black -skew-x-3 bg-white">
            Projects
          </div>
        </div>
      </h2>

      <div className="w-[80vw] mx-auto">
        <Projects />
      </div>
    </section>

    <footer className="py-6 text-sm text-center text-gray-600">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/GriffinSauce/jorisgriffioen"
      >
        <BsGithub className="inline-block" />
        <span> source</span>
      </a>
      <span> - artwork by Evelien Griffioen</span>
    </footer>
  </Layout>
);

export default Home;
