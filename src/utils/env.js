import { Platform } from 'react-native';

// localHost URL will not work on Android device in development mode due to
// Firebase emulators being served on a non-secure 'http' URL (i.e: not 'https://...').

// To test on Android device in development mode, liveHost URL will be used instead.

const liveHost = 'https://us-central1-yummeals-e8d3d.cloudfunctions.net';
const localHost = 'http://localhost:5001/yummeals-e8d3d/us-central1';

export const isAndroid = Platform.OS === 'android';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isMock = false; // Change isMock to true during development to limit API requests to Google
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
