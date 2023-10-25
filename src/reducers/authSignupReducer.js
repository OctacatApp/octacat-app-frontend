export const InitialState = {
  loading: false,
  error: null,
};

export default function registerReducer(state, action) {
  switch (action.type) {
    case 'AUTH_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case '': {
      return '';
    }
    default: {
      return 'hello world';
    }
  }
}
