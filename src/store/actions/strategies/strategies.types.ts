import { StrategiesActionTypes } from "./strategies.actions";

import { StrategyType } from "models";
import { ActionType } from "../actions.types";

export type CreateStrategyActionType = ActionType<
  StrategiesActionTypes.CREATE_STRATEGY,
  StrategyType
>;
export type RemoveStrategyActionType = ActionType<
  StrategiesActionTypes.REMOVE_STRATEGY,
  StrategyType["id"]
>;
export type SelectStrategyActionType = ActionType<
  StrategiesActionTypes.SELECT_STRATEGY,
  StrategyType
>;
export type LoadStrategiesActionType = ActionType<
  StrategiesActionTypes.LOAD_STRATEGIES,
  StrategyType[]
>;
export type LoadStrategiesToSelectActionType = ActionType<
  StrategiesActionTypes.LOAD_STRATEGIES_TO_SELECT,
  StrategyType[]
>;

export type StrategiesAction =
  | CreateStrategyActionType
  | RemoveStrategyActionType
  | SelectStrategyActionType
  | LoadStrategiesActionType
  | LoadStrategiesToSelectActionType;
