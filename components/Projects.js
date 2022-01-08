const Tag = ({ id }) => {
  const baseClasses =
    'inline-block bg-white rounded text-sm text-black py-0.5 px-1.5';

  if (id === 'module')
    return <div className={[baseClasses, 'bg-blue-300'].join(' ')}>module</div>;
  if (id === 'website')
    return (
      <div className={[baseClasses, 'bg-green-300'].join(' ')}>website</div>
    );
  if (id === 'webapp')
    return (
      <div className={[baseClasses, 'bg-green-300'].join(' ')}>web app</div>
    );
  if (id === 'extension')
    return (
      <div className={[baseClasses, 'bg-yellow-300'].join(' ')}>extension</div>
    );
  if (id === 'tooling')
    return (
      <div className={[baseClasses, 'bg-orange-300'].join(' ')}>tooling</div>
    );
  if (id === 'wip')
    return (
      <div className={[baseClasses, 'bg-gray-500'].join(' ')}>
        work in progress
      </div>
    );
  return null;
};

const Project = ({ url, name, description, tags = [] }) => (
  <a className="text-left grid gap-1" href={url}>
    <div className="text-xl">{name}</div>
    <div className="space-x-1">
      {tags.map((tag) => (
        <Tag id={tag} />
      ))}
    </div>
    <div className="font-light">{description}</div>
  </a>
);

const Projects = () => (
  <div className="grid gap-6">
    <Project
      url="https://github.com/GriffinSauce/left-alive"
      name="leftalive.nl"
      description="The website of Left Alive"
      tags={['website']}
    />

    <Project
      url="https://github.com/GriffinSauce/noise.cat"
      name="noise.cat"
      description="Your band home - plan shows, navigation hints, share demo's and important links"
      tags={['webapp']}
    />

    <Project
      url="https://github.com/GriffinSauce/subsmarine"
      name="subsmarine.app"
      description="A newsletter reading app"
      tags={['webapp']}
    />

    <Project
      url="https://github.com/GriffinSauce/pico"
      name="pico"
      description="Gather high quality media from events with zero friction"
      tags={['webapp', 'wip']}
    />

    <Project
      url="https://github.com/GriffinSauce/morningstar-web-editor-plus"
      name="morningstar-web-editor-plus"
      description="Chrome extension with mods and additions to the Morningstar Web Editor"
      tags={['extension']}
    />

    <Project
      url="https://github.com/GriffinSauce/tailshake"
      name="tailshake"
      description="Tailshake combines TailwindCSS classes and shakes off any conflicts"
      tags={['module']}
    />

    <Project
      url="https://github.com/GriffinSauce/next-starter"
      name="next-starter"
      description="An opinionated starter kit for Next.js apps"
      tags={['tooling']}
    />

    <Project
      url="https://github.com/GriffinSauce/reaper-project-parser"
      name="reaper-project-parser"
      description="A Reaper DAW project parser written in TypeScript - parse RPP files in JS"
      tags={['module', 'wip']}
    />

    <Project
      url="https://github.com/GriffinSauce/luft"
      name="luft"
      description="An extremely simple Airtable client for JavaScript."
      tags={['module']}
    />
  </div>
);

export default Projects;
