import { setupWorker } from 'msw';

import handlers from '@mocks/handlers';

export const serviceWorker = setupWorker(...handlers);
