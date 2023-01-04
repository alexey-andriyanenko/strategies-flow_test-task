import React, { memo, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { Button } from "components/ui";
import { MainPageRoute } from "routes";

import styles from "./page-container.module.css";

export type PageContainerProps = PropsWithChildren & {
  title: string;
  className?: string;
  withBack?: boolean;
};

export const PageContainer: React.FC<PageContainerProps> = memo(
  ({ title, className, withBack = false, children }) => {
    const navigate = useNavigate();

    return (
      <main className={cn(styles.container, className)}>
        <h1> {title} </h1>
        {withBack && (
          <Button className={styles.back} onClick={() => navigate(MainPageRoute.path)}>
            {" "}
            Back{" "}
          </Button>
        )}
        {children}
      </main>
    );
  },
);
