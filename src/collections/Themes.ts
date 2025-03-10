import type { CollectionConfig } from 'payload'

export const Themes: CollectionConfig = {
  slug: 'Themes',
  dbName: 'Themes',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'count',
      type: 'number',
      required: true,
    },
  ],
}
