import React, { memo } from "react";
import cn from "classnames";

import styles from "./input.module.css";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  title?: string;
};

export const Input: React.FC<InputProps> = memo(
  ({ containerClassName, className, title, type = "text", ...props }) => {
    const containerStyles = cn(styles.container, containerClassName);
    const inputStyles = cn(styles.input, className);

    return (
      <div className={containerStyles}>
        {title && <div className={styles.title}> {title} </div>}
        <input className={inputStyles} type={type} {...props} />
      </div>
    );
  },
);
