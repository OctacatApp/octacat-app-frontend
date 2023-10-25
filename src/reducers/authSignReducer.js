export const InitialSignState = {
  token: null,
  loading: false,
  errorMessage: null,
};

export default function signReducer(state, action) {
  switch (action.type) {
    case 'SIGN_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'SIGN_SUCCESS': {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        token: action.payload,
      };
    }
    case 'SIGN_ERROR': {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        loading: false,
        error: null,
      };
    }
    default: {
      throw Error(`unknown : ${action.type}`);
    }
  }
}
