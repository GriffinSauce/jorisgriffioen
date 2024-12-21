import { tv } from 'tailwind-variants';

const tagNames = {
  professional: 'professional',
  personal: 'personal',
  module: 'module',
  website: 'website',
  webapp: 'web app',
  mobileapp: 'mobile app',
  elearning: 'e-learning',
  extension: 'extension',
  tooling: 'tooling',
  wip: 'work in progress',
} as const;

export type TagId = keyof typeof tagNames;

const tagIds = new Set(Object.keys(tagNames));

const tag = tv({
  base: 'inline-block bg-white rounded text-sm text-black py-0.5 px-1.5',
  variants: {
    id: {
      professional: 'bg-pink-300',
      personal: 'bg-pink-300',
      module: 'bg-blue-300',
      website: 'bg-green-300',
      webapp: 'bg-green-300',
      mobileapp: 'bg-orange-300',
      elearning: 'bg-violet-300',
      extension: 'bg-yellow-300',
      tooling: 'bg-orange-300',
      wip: 'bg-gray-500',
    } satisfies Record<TagId, string>,
  },
});

export const ProjectTag = ({ id }: { id: TagId }) => {
  if (!tagIds.has(id)) return null;

  return <div className={tag({ id })}>{tagNames[id]}</div>;
};
