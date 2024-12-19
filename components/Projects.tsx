import ProjectTag, { type TagId } from './ProjectTag';

const Project = ({
  url,
  name,
  description,
  tags = [],
}: {
  url: string;
  name: React.ReactNode;
  description: React.ReactNode;
  tags: TagId[];
}) => (
  <a className="grid gap-1 text-left" href={url}>
    <div className="text-2xl">{name}</div>
    <div className="space-x-1">
      {tags.map((tag) => (
        <ProjectTag key={tag} id={tag} />
      ))}
    </div>
    <div className="text-lg font-light">{description}</div>
  </a>
);

const Projects = () => (
  <div className="grid gap-6">
    <Project
      url="https://www.findhotel.net"
      name={
        <>
          Vio.com
          <span className="ml-3 text-sm text-gray-300">
            (Jun 2020 - Present)
          </span>
        </>
      }
      description={
        <>
          Find the right hotel at the best price.
          <br />
          Senior Engineer &rarr; Engineering Lead &rarr; Tech Lead &rarr; Staff
          Engineer
        </>
      }
      tags={['professional', 'webapp', 'mobileapp', 'tooling']}
    />

    <Project
      url="https://www.peerby.com"
      name={
        <>
          Peerby
          <span className="ml-3 text-sm text-gray-300">
            (May 2015 - May 2020)
          </span>
        </>
      }
      description={
        <>
          Borrow and rent things from people nearby.
          <br />
          Engineer &rarr; CTO
        </>
      }
      tags={['professional', 'webapp', 'mobileapp']}
    />

    <Project
      url="https://www.plusport.com"
      name={
        <>
          Plusport
          <span className="ml-3 text-sm text-gray-300">
            (May 2010 - Apr 2015)
          </span>
        </>
      }
      description={
        <>
          E-learning and compliance management
          <br />
          Interaction Designer / Engineer
        </>
      }
      tags={['professional', 'website', 'elearning', 'mobileapp']}
    />

    <hr className="border-t-0 border-b border-gray-500 border-dashed" />

    <Project
      url="https://github.com/GriffinSauce/left-alive"
      name="leftalive.nl"
      description="A simple website for my pop punk band Left Alive."
      tags={['personal', 'website']}
    />

    <Project
      url="https://github.com/GriffinSauce/noise.cat"
      name="Noise.cat"
      description="Your band home - plan shows, navigation hints, share demo's and important links"
      tags={['personal', 'webapp']}
    />

    <Project
      url="https://github.com/GriffinSauce/subsmarine"
      name="Subsmarine"
      description="A newsletter reading app"
      tags={['personal', 'webapp']}
    />

    <Project
      url="https://github.com/GriffinSauce/pico"
      name="Pico"
      description="Gather high quality media from events with zero friction"
      tags={['personal', 'webapp', 'wip']}
    />

    <Project
      url="https://github.com/GriffinSauce/morningstar-web-editor-plus"
      name="morningstar-web-editor-plus"
      description="Chrome extension with mods and additions to the Morningstar Web Editor"
      tags={['personal', 'extension']}
    />

    <Project
      url="https://github.com/GriffinSauce/tailshake"
      name="tailshake"
      description="Tailshake combines TailwindCSS classes and shakes off any conflicts"
      tags={['personal', 'module']}
    />

    <Project
      url="https://github.com/GriffinSauce/next-starter"
      name="next-starter"
      description="An opinionated starter kit for Next.js apps"
      tags={['personal', 'tooling']}
    />

    <Project
      url="https://github.com/GriffinSauce/reaper-project-parser"
      name="reaper-project-parser"
      description="A Reaper DAW project parser written in TypeScript - parse RPP files in JS"
      tags={['personal', 'module', 'wip']}
    />

    <Project
      url="https://github.com/GriffinSauce/luft"
      name="luft"
      description="An extremely simple Airtable client for JavaScript."
      tags={['personal', 'module']}
    />
  </div>
);

export default Projects;
