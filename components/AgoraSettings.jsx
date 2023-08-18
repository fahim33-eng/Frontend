import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react'
// config for agora

export const config = {mode : 'rtc', codec : 'vp8', appId : "5df7d63fb30642108563623d6fbd3969", token : "007eJxTYKhbctG+aNFio9SU4j/LesT5uZ1qsubFRVfIyoXZVWf5hyowmKakmaeYGaclGRuYmRgZGliYmhmbGRmnmKUlpRhbmlnmTryf0hDIyGBeG8HCyACBID4HQ3JGYl5eao4hAwMA7UEdjg=="}
export const useClient = createClient(config)
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
export const channelName = "channel1"