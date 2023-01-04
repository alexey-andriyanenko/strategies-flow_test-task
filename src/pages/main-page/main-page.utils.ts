import { StrategyType } from "models";

export const getMockStrategies = (): StrategyType[] => {
  const result: StrategyType[] = [];

  for (let i = 1; i <= 10; i++) {
    result.push({
      name: `Strategy ${i}`,
      capital: i * 100,
      id: `strategy-${i}`,
    });
  }

  return result;
};
