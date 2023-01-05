import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getStrategies } from "api";
import { Input, PageContainer } from "components";
import { StrategyType } from "models";
import { loadStrategiesToSelect, ReducersType, selectStrategy, StrategiesStateType } from "store";
import { CreateStrategyPageRoute } from "routes";
import { getMockStrategiesToSelect } from "./select-strategy-page.utils";

import styles from "./select-strategy-page.module.css";

export const SelectStrategyPage: React.FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const strategies = useSelector<ReducersType, StrategiesStateType>(({ strategies }) => strategies);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function effect() {
      const data = await getStrategies();
      if (!data) {
        dispatch(loadStrategiesToSelect(getMockStrategiesToSelect()));
      }
    }

    effect();
  }, []);

  const handleSelect = (strategy: StrategyType) => {
    dispatch(selectStrategy(strategy));
    navigate(CreateStrategyPageRoute.path);
  };

  return (
    <PageContainer title="Select Strategy" withBack>
      <div className={styles.filters}>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className={styles.list}>
        {strategies.listToSelect
          .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
          .map((strategy) => (
            <div
              key={strategy.id}
              className={styles.listItem}
              onClick={() => handleSelect(strategy)}
            >
              <span className={styles.name}> {strategy.name} </span>
              <span className={styles.capital}> $ {strategy.capital} </span>
            </div>
          ))}
      </div>
    </PageContainer>
  );
});
