import type { CollectionConfig } from 'payload'

export const ReactAnswers: CollectionConfig = {
  slug: 'reactAnswers',
  dbName: 'reactAnswers',
  fields: [
    {
      name: 'questionId',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'indexes',
      type: 'number',
      hasMany: true,
      required: true,
    },
  ],
}
