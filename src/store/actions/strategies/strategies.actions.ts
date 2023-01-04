import {
  CreateStrategyActionType,
  RemoveStrategyActionType,
  LoadStrategiesActionType,
  SelectStrategyActionType,
  LoadStrategiesToSelectActionType,
} from "./strategies.types";

export enum StrategiesActionTypes {
  CREATE_STRATEGY = "strategies/CREATE",
  REMOVE_STRATEGY = "strategies/REMOVE",
  SELECT_STRATEGY = "strategies/SELECT",
  LOAD_STRATEGIES = "strategies/LOAD",
  LOAD_STRATEGIES_TO_SELECT = "strategies/LOAD_TO_SELECT",
}

export const createStrategy = (payload: CreateStrategyActionType["payload"]) => ({
  type: StrategiesActionTypes.CREATE_STRATEGY,
  payload,
});

export const removeStrategy = (payload: RemoveStrategyActionType["payload"]) => ({
  type: StrategiesActionTypes.REMOVE_STRATEGY,
  payload,
});

export const selectStrategy = (payload: SelectStrategyActionType["payload"]) => ({
  type: StrategiesActionTypes.SELECT_STRATEGY,
  payload,
});

export const loadStrategies = (payload: LoadStrategiesActionType["payload"]) => ({
  type: StrategiesActionTypes.LOAD_STRATEGIES,
  payload,
});

export const loadStrategiesToSelect = (payload: LoadStrategiesToSelectActionType["payload"]) => ({
  type: StrategiesActionTypes.LOAD_STRATEGIES_TO_SELECT,
  payload,
});
