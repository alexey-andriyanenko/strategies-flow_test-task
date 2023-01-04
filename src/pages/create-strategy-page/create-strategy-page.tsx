import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { SelectStrategyPageRoute } from "routes";
import { Button, Input, PageContainer } from "components";
import { StrategyType } from "models";
import { createStrategy, ReducersType, StrategiesStateType } from "store";

import styles from "./create-strategy-page.module.css";

export const CreateStrategyPage: React.FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const strategies = useSelector<ReducersType, StrategiesStateType>(({ strategies }) => strategies);

  const [strategy, setStrategy] = useState<Omit<StrategyType, "id">>({
    name: "",
    capital: 100,
  });

  useEffect(() => {
    if (!strategies.selectedStrategy) return;

    setStrategy({
      name: strategies.selectedStrategy.name,
      capital: strategies.selectedStrategy.capital,
    });
  }, [strategies.selectedStrategy]);

  const handleChange = (name: "name" | "capital") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrategy((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleAdd = () => navigate(SelectStrategyPageRoute.path);

  const handleCreate = () => {
    dispatch(
      createStrategy({
        ...strategy,
        id: uuidv4(),
      }),
    );

    setStrategy({
      name: "",
      capital: 100,
    });
  };

  const disabled = !strategy.name || !strategy.capital;

  return (
    <PageContainer title="Create Strategy" withBack>
      <div className={styles.form}>
        <h3 className={styles.subtitle}>
          Fact: Interest rate on bank cash deposits will never beat inflation
        </h3>

        <Button title="Select a strategy" onClick={handleAdd}>
          ADD A STRATEGY
        </Button>
        <Input title="Strategy Name" value={strategy.name} onChange={handleChange("name")} />
        <Input
          title="Strategy Capital"
          value={strategy.capital}
          onChange={handleChange("capital")}
        />
        <Button disabled={disabled} onClick={handleCreate}>
          Create Strategy
        </Button>
      </div>
    </PageContainer>
  );
});
