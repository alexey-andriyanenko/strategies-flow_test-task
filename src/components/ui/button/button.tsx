import React, { memo, PropsWithChildren } from "react";
import cn from "classnames";

import { ButtonAppearanceKeys } from "./button.types";

import styles from "./button.module.css";

export type ButtonProps = PropsWithChildren &
  React.ButtonHTMLAttributes<any> & {
    containerClassName?: string;
    title?: string;
    appearance?: ButtonAppearanceKeys;
  };

export const Button: React.FC<ButtonProps> = memo(
  ({
    children,
    containerClassName,
    className,
    title,
    appearance = "primary",
    type = "button",
    disabled,
    ...props
  }) => {
    const containerStyles = cn(
      styles.container,
      styles[appearance],
      { [styles.disabled]: disabled },
      containerClassName,
    );
    const buttonStyles = cn(styles.button, className);

    return (
      <div className={containerStyles}>
        {title && <div className={styles.title}> {title} </div>}
        <button className={buttonStyles} type={type} {...props}>
          {children}
        </button>
      </div>
    );
  },
);
