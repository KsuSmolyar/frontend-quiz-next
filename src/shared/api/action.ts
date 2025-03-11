'use server'

import { getAppPayload } from '../utils'

export async function postAnswer({ theme, id }: { theme: 'javascript' | 'react'; id: string }) {
  const payload = await getAppPayload()
  return payload.find({
    collection: `${theme}Answers`,
    pagination: false,
    where: { questionId: { equals: id } },
  })
}
