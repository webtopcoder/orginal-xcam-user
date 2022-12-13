import { createAction } from '@lib/redux';

export const setReadyState = createAction('APP_STATE_SUCCESS');
export const resetAppState = createAction('APP_STATE_RESET');
