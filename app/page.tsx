import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import { Logo } from '../components/Logo';
import { Links } from '../components/Links';
import { Music } from '../components/Music/Music';
import { Projects } from '../components/Projects';
import heroImage from './hero.jpg';

const Container = ({ children }) => (
  <div className="w-[80vw] mx-auto">{children}</div>
);

const SubHeader = ({ id, children }) => (
  <h2 id={id} className="text-left border-b-2">
    <Container>
      <div className="inline-block px-3 pb-1 text-black -skew-x-3 bg-white">
        {children}
      </div>
    </Container>
  </h2>
);

const Home = () => (
  <>
    <header>
      <div className="gap-3 py-6 bg-black flex-center">
        <Logo width={80} />
        <div>
          <h1>Joris Griffioen</h1>
          <p>Developer, guitarist.</p>
        </div>
      </div>

      <Image
        className="w-full max-w-full h-auto"
        src={heroImage}
        alt="On stage with Left Alive"
        quality={90}
        priority
        sizes="100vw"
      />
    </header>

    <section className="my-3 bg-black">
      <div className="sm:w-[80vw] mx-auto">
        <Links />
      </div>
    </section>

    <section className="grid gap-16 mt-12 text-center sm:gap-20 ">
      <SubHeader id="music">Music</SubHeader>

      <Container>
        <Music />
      </Container>
    </section>

    <section className="grid gap-8 mt-12 text-center sm:gap-8 ">
      <SubHeader id="projects">Projects</SubHeader>

      <Container>
        <Projects />
      </Container>
    </section>

    <footer className="py-6 text-sm text-center text-gray-400">
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
  </>
);

export default Home;
