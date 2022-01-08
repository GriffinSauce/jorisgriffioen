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

    <section className="mt-12 grid gap-16 sm:gap-20 text-center ">
      <h2 id="music" className="border-b-2 text-left">
        <div className="w-[80vw] mx-auto">
          <div className="bg-white text-black inline-block pb-1 px-3 -skew-x-3">
            Music
          </div>
        </div>
      </h2>

      <Music />
    </section>

    <section className="mt-12 grid gap-8 sm:gap-8 text-center ">
      <h2 id="projects" className="border-b-2 text-left">
        <div className="w-[80vw] mx-auto">
          <div className="bg-white text-black inline-block pb-1 px-3 -skew-x-3">
            Projects
          </div>
        </div>
      </h2>

      <div className="w-[80vw] mx-auto">
        <Projects />
      </div>
    </section>

    <footer className="text-sm text-gray-600 py-6 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/GriffinSauce/jorisgriffioen"
      >
        <BsGithub className="inline-block" /> source
      </a>
      <span> - artwork by Evelien Griffioen</span>
    </footer>
  </Layout>
);

export default Home;
