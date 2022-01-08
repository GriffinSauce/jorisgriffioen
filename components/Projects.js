const Project = ({ url, name, description }) => (
  <a className="text-left" href={url}>
    <div className="text-xl">{name}</div>
    <div className="font-light">{description}</div>
  </a>
);

const Projects = () => (
  <div className="grid gap-6">
    <Project
      url="https://github.com/GriffinSauce/left-alive"
      name="leftalive.nl"
      description="The website of Left Alive"
    />

    <Project
      url="https://github.com/GriffinSauce/noise.cat"
      name="noise.cat"
      description="Your band home"
    />

    <Project
      url="https://github.com/GriffinSauce/subsmarine"
      name="subsmarine.app"
      description="A newsletter reading app"
    />

    <Project
      url="https://github.com/GriffinSauce/pico"
      name="pico"
      description="Gather high quality media from events with zero friction"
    />

    <Project
      url="https://github.com/GriffinSauce/morningstar-web-editor-plus"
      name="morningstar-web-editor-plus"
      description="Mods and additions to the Morningstar Web Editor"
    />

    <Project
      url="https://github.com/GriffinSauce/tailshake"
      name="tailshake"
      description="Tailshake combines TailwindCSS classes and shakes off any conflicts"
    />

    <Project
      url="https://github.com/GriffinSauce/next-starter"
      name="next-starter"
      description="An opinionated starter kit for Next.js apps"
    />

    <Project
      url="https://github.com/GriffinSauce/reaper-project-parser"
      name="reaper-project-parser"
      description="A Reaper DAW project parser written in TypeScript - parse RPP files in JS"
    />

    <Project
      url="https://github.com/GriffinSauce/luft"
      name="luft"
      description="An extremely simple Airtable client for JavaScript."
    />
  </div>
);

export default Projects;
