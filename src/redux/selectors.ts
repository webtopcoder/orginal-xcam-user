import { createSelector } from 'reselect';

const userSelecter = (state) => state.user.current;
const performerSelecter = (state) => state.performer.current;
const studioSelecter = (state) => state.studio.current;
const authSelecter = (state) => state.auth;

export const currentUserSelecter = createSelector(
  userSelecter,
  performerSelecter,
  studioSelecter,
  authSelecter,
  (user, performer, studio, auth) => {
    if (!auth.loggedIn) return null;

    if (user?._id) {
      return { ...user, role: 'user' };
    }

    if (performer?._id) {
      return { ...performer, role: 'performer' };
    }

    if (studio?._id) {
      return { ...studio, role: 'studio' };
    }

    return null;
  }
);
