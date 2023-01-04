import { StrategiesStateType } from "./strategies.types";
import { StrategiesAction, StrategiesActionTypes } from "store/actions";

const initialState: StrategiesStateType = {
  list: [],
  listToSelect: [],
  selectedStrategy: null,
};

export const strategiesReducer = (
  state = initialState,
  { type, payload }: StrategiesAction,
): StrategiesStateType => {
  switch (type) {
    case StrategiesActionTypes.CREATE_STRATEGY: {
      return {
        ...state,
        list: [...state.list, payload],
        selectedStrategy: null,
      };
    }
    case StrategiesActionTypes.REMOVE_STRATEGY: {
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== payload),
      };
    }
    case StrategiesActionTypes.SELECT_STRATEGY: {
      return {
        ...state,
        selectedStrategy: payload,
      };
    }
    case StrategiesActionTypes.LOAD_STRATEGIES: {
      if (state.list.length !== 0) return state;

      return {
        ...state,
        list: payload,
      };
    }
    case StrategiesActionTypes.LOAD_STRATEGIES_TO_SELECT: {
      if (state.listToSelect.length !== 0) return state;

      return {
        ...state,
        listToSelect: payload,
      };
    }
    default:
      return state;
  }
};
