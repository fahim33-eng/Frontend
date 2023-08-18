import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react'

export const config = {mode : 'rtc', codec : 'vp8', appId : process.env.NEXT_PUBLIC_AGORA_APP_ID, token : process.env.NEXT_PUBLIC_AGORA_TOKEN }
export const useClient = createClient(config)
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
export const channelName = "channel1"