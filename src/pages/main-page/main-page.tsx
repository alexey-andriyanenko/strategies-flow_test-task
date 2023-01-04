import React, { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CreateStrategyPageRoute } from "routes";
import { Button, PageContainer } from "components";
import { getStrategies } from "api";
import { loadStrategies, removeStrategy, ReducersType, StrategiesStateType } from "store";
import { getMockStrategies } from "./main-page.utils";

import styles from "./main-page.module.css";

export const MainPage: React.FC = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const strategies = useSelector<ReducersType, StrategiesStateType>(({ strategies }) => strategies);

  useEffect(() => {
    async function effect() {
      const data = await getStrategies();
      if (!data) {
        dispatch(loadStrategies(getMockStrategies()));
      }
    }

    effect();
  }, []);

  return (
    <PageContainer title="Main Page">
      <nav className={styles.nav}>
        <Button onClick={() => navigate(CreateStrategyPageRoute.path)}> Create Strategy </Button>
      </nav>

      <section className={styles.list}>
        {strategies.list.map(({ name, capital, id }) => (
          <div key={id} className={styles.listItem}>
            <span className={styles.name}> {name} </span>
            <span className={styles.capital}> $ {capital} </span>

            <Button appearance="error" onClick={() => dispatch(removeStrategy(id))}>
              REMOVE
            </Button>
          </div>
        ))}
      </section>
    </PageContainer>
  );
});
