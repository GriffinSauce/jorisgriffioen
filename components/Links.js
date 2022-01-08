import { forwardRef } from 'react';
import Link from 'next/link';

const Anchor = forwardRef(({ children, ...props }, ref) => {
  return (
    <a
      {...props}
      ref={ref}
      rel="noopener noreferrer"
      className="flex-center flex-col gap-2 py-6 text-lg"
    >
      {children}
    </a>
  );
});

const Icon = ({ src, alt }) => <img className="w-8" alt={alt} src={src} />;

const Links = () => (
  <>
    <nav className="grid grid-cols-2 sm:grid-cols-3">
      <Anchor target="_blank" href="https://github.com/GriffinSauce">
        <Icon alt="github" src="icon-github.svg" />
        <div>Github</div>
      </Anchor>
      <Anchor target="_blank" href="https://twitter.com/jorisgriffioen">
        <Icon alt="twitter" src="icon-twitter.svg" />
        <div>Twitter</div>
      </Anchor>
      <Anchor target="_blank" href="https://linkedin.com/in/jorisgriffioen/">
        <Icon alt="linkedin" src="icon-linkedin.svg" />
        <div>LinkedIn</div>
      </Anchor>
      <Anchor target="_blank" href="https://instagram.com/jorisgriffioen">
        <Icon alt="instagram" src="icon-instagram.svg" />
        <div>Instagram</div>
      </Anchor>
      <Link href="/music">
        <Anchor>
          <Icon alt="music" src="icon-music.svg" />
          <span>Music</span>
        </Anchor>
      </Link>
    </nav>
  </>
);

export default Links;
