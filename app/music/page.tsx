import Link from 'next/link';
import Logo from '../../components/Logo';
import Music from '../../components/Music';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music',
  description: 'My bands',
  openGraph: {
    url: 'https://joris.rocks/music',
    description: 'My bands',
  },
};

const MusicPage = () => (
  <>
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
  </>
);

export default MusicPage;
