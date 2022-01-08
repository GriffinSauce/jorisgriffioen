const projects = [
  {
    url: 'https://github.com/GriffinSauce/left-alive',
    name: 'left-alive',
    description: 'The website of Left Alive',
  },

  {
    url: 'https://github.com/GriffinSauce/noise.cat',
    name: 'noise.cat',
    description: 'Your band home',
  },

  {
    url: 'https://github.com/GriffinSauce/subsmarine',
    name: 'subsmarine',
    description: 'A newsletter reading app',
  },

  {
    url: 'https://github.com/GriffinSauce/pico',
    name: 'pico',
    description:
      'Gather high quality pictures and video from events with zero friction',
  },

  {
    url: 'https://github.com/GriffinSauce/morningstar-web-editor-plus',
    name: 'morningstar-web-editor-plus',
    description: 'Mods and additions to the Morningstar Web Editor',
  },

  {
    url: 'https://github.com/GriffinSauce/tailshake',
    name: 'tailshake',
    description:
      'Tailshake combines TailwindCSS classes and shakes off any conflicts',
  },

  {
    url: 'https://github.com/GriffinSauce/next-starter',
    name: 'next-starter',
    description: 'An opinionated starter kit for Next.js apps',
  },

  {
    url: 'https://github.com/GriffinSauce/reaper-project-parser',
    name: 'reaper-project-parser',
    description:
      'A Reaper DAW project parser written in TypeScript - parse RPP files in JS',
  },

  {
    url: 'https://github.com/GriffinSauce/luft',
    name: 'luft',
    description: 'An extremely simple Airtable client for JavaScript.',
  },
];

const Projects = () => (
  <div className="grid gap-6">
    {projects.map(({ url, name, description }) => (
      <a className="text-left" href={url}>
        <div className="text-xl">{name}</div>
        <div className="font-light">{description}</div>
      </a>
    ))}
  </div>
);

export default Projects;
