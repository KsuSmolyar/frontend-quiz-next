import type { CollectionConfig } from 'payload'

export const JavaScriptAnswers: CollectionConfig = {
  slug: 'javascriptAnswers',
  dbName: 'javascriptAnswers',
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
