import { Answer, QuestionData } from '../types'

const BASE_URL = 'https://my-fastify-app.onrender.com/'
// const BASE_URL = 'http://localhost:3001/'

export const postFetcher = (url: string, { arg }: { arg: QuestionData }): Promise<Answer> =>
  fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res.json())
