// Keep colors complete tailwind classes to support purge
const tags = [
  {
    id: 'professional',
    color: 'bg-pink-300',
    label: 'professional',
  },
  {
    id: 'personal',
    color: 'bg-pink-300',
    label: 'personal',
  },
  {
    id: 'module',
    color: 'bg-blue-300',
    label: 'module',
  },
  {
    id: 'website',
    color: 'bg-green-300',
    label: 'website',
  },
  {
    id: 'webapp',
    color: 'bg-green-300',
    label: 'web app',
  },
  {
    id: 'mobileapp',
    color: 'bg-orange-300',
    label: 'mobile app',
  },
  {
    id: 'elearning',
    color: 'bg-violet-300',
    label: 'e-learning',
  },
  {
    id: 'extension',
    color: 'bg-yellow-300',
    label: 'extension',
  },
  {
    id: 'tooling',
    color: 'bg-orange-300',
    label: 'tooling',
  },
  {
    id: 'wip',
    color: 'bg-gray-500',
    label: 'work in progress',
  },
];

const tagsMap = tags.reduce((map, tag) => {
  map.set(tag.id, tag);
  return map;
}, new Map());

const ProjectTag = ({ id }) => {
  const baseClasses =
    'inline-block bg-white rounded text-sm text-black py-0.5 px-1.5';

  const tag = tagsMap.get(id);

  if (!tag) return null;

  const { color, label } = tag;
  return <div className={[baseClasses, color].join(' ')}>{label}</div>;
};

export default ProjectTag;
