
export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export function setLoggedUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function unsetLoggedUser() {
  return {
    type: UNSET_USER,
  };
}
