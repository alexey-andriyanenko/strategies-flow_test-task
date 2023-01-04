import React, { memo, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Input, PageContainer } from "components";
import { StrategyType } from "models";
import { selectStrategy } from "store";
import { CreateStrategyPageRoute } from "routes";
import { getMockStrategiesToSelect } from "./select-strategy-page.utils";

import styles from "./select-strategy-page.module.css";

export const SelectStrategyPage: React.FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const list = useMemo(() => getMockStrategiesToSelect(), []);

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
        {list
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
