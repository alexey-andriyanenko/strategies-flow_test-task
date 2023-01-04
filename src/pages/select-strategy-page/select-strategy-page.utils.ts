import { v4 as uuidv4 } from "uuid";

import { StrategyType } from "models";

export const getMockStrategiesToSelect = (): StrategyType[] => {
  const result: StrategyType[] = [];

  for (let i = 1; i <= 20; i++) {
    result.push({
      name: `Strategy To Select #${i}`,
      capital: i * 150,
      id: uuidv4(),
    });
  }

  return result;
};
