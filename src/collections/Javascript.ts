import type { CollectionConfig } from 'payload'

export const JavaScript: CollectionConfig = {
  slug: 'javascript',
  dbName: 'javascript',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: ['single', 'multiple', 'match'],
      required: true,
    },
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'variants',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'text', type: 'text' },
        { name: 'id', type: 'number' },
      ],
      required: true,
    },
    {
      name: 'given',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
  ],
}
