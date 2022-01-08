const Link = ({ children, backgroundClassName, ...props }) => (
  <a
    {...props}
    className="flex flex-col aspect-video justify-between relative p-4 mb-2"
  >
    <div
      className={[
        'block absolute inset-0 content-none bg-top bg-cover',
        backgroundClassName,
      ].join(' ')}
    ></div>
    <div className="block absolute inset-0 content-none bg-black/30"></div>
    {children}
  </a>
);

const Logo = ({ src, alt }) => (
  <img className="z-10 w-full" alt={alt} src={src} />
);

const Description = ({ children }) => (
  <div className="absolute -bottom-2 -inset-x-1 text-center bg-black inline-block px-3 pt-2 pb-[0.6rem] transform -skew-x-6 bg-gradient-to-r from-fuchsia-800  to-purple-900">
    {children}
  </div>
);

const LinksBands = () => (
  <>
    <nav className="grid gap-4">
      <Link
        backgroundClassName="bg-[url('/vid-cs.webp')]"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.coralsprings.nl/"
      >
        <Logo alt="Coral Springs" src="logo-coralsprings.svg" />
        <Description>pop punk since 2012 - guitar, backing vocals</Description>
      </Link>
      <Link
        backgroundClassName="bg-[url('/vid-la.webp')]"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.leftalive.nl/"
      >
        <Logo alt="Left Alive" src="logo-leftalive.svg" />
        <Description>
          pop punk from the heart - guitar, backing vocals
        </Description>
      </Link>
    </nav>
  </>
);

export default LinksBands;
