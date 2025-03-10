import config from '@/payload.config'
import { getPayload } from 'payload'

export const getAppPayload = async () => {
  const payloadConfig = await config
  return getPayload({ config: payloadConfig })
}
