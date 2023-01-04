import { StrategyType } from "models";

export type StrategiesStateType = {
  list: StrategyType[];
  listToSelect: StrategyType[];
  selectedStrategy: StrategyType | null;
};
