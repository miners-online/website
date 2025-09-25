'use client';

import Link from "next/link";
import * as React from "react";

import {
  makeStyles,
  tokens,
  Text,
  mergeClasses,
} from "@fluentui/react-components";

import { Card, CardHeader, CardProps } from "@fluentui/react-components";

export type AppInfo = {
  id: string;
  name: string;
  description: string;
  url: string;
  logoUrl?: string;
};

const useStyles = makeStyles({
  title: { margin: "0 0 12px" },

  description: { margin: "0 0 12px" },

  card: {
    maxWidth: "100%",
    height: "fit-content",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  logo: {
    borderRadius: "4px",
    width: "48px",
    height: "48px",
  },

  text: { margin: "0" },
});


export const AppCard = ({ className, ...props }: CardProps & AppInfo) => {
  const styles = useStyles();

  return (
    <Link href={props.url} style={{ textDecoration: 'none' }}>
      <Card
        {...props}
        className={mergeClasses(className, styles.card)}
      >
        <CardHeader
          image={<>{props.logoUrl &&  <img
            className={styles.logo}
            src={props.logoUrl}
            aria-label={`${props.name} logo`}
            width={48}
            height={48}
          />}</>}
          header={
            <Text as="h5" style={{ margin: 0 }} weight="semibold">
              {props.name}
            </Text>
          }
          // description={<Caption1 className={styles.caption}>Developer</Caption1>}
        />

        <p className={styles.text}>
          {props.description}
        </p>
      </Card>
    </Link>
  );
};