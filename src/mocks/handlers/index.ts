import imageHandlers from '@mocks/handlers/imageHandlers';
import studyHandlers from '@mocks/handlers/studyHandlers';
import userHandlers from '@mocks/handlers/userHandlers';

const handlers = [...imageHandlers, ...studyHandlers, ...userHandlers];

export default handlers;
