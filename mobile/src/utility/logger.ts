import * as Sentry from '@sentry/react-native';

const log = (error: Sentry.Event) => Sentry.captureEvent(error);
const logMessage = (message: string) => Sentry.captureMessage(message);

const start = () =>
  Sentry.init({
    dsn: 'https://f8c8fe1348e871eb52007cf2a6e4341b@o4507051943591936.ingest.us.sentry.io/4507123268255744',
    debug: true, // If `true`,
    tracesSampleRate: 1.0,
    enableCaptureFailedRequests: true,
  });

export default { log, start, logMessage };
