'use client';

import * as React from "react";
import { useState, useMemo } from "react";
import {
  makeStyles,
  Text,
  SearchBox,
  SearchBoxChangeEvent,
  InputOnChangeData,
  Title1,
  Subtitle1
} from "@fluentui/react-components";

import { AppCard } from "../components/app-card";
import { APPS } from "../config";

const useStyles = makeStyles({
  main: {
    padding: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },

  search: {
    marginTop: "20px",
    marginBottom: "20px",
  },

  apps: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    rowGap: "20px",
    columnGap: "20px",
    alignItems: "start",
  },

  category: {
    width: "100%",
    marginBottom: "24px",
  },

  categoryTitle: {
    marginBottom: "10px",
    display: "block",
  },
});

export default function DashboardPage() {
  const [query, setQuery] = useState('');
  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return APPS;
    return APPS.map(category => ({
      ...category,
      apps: category.apps.filter(app =>
        app.name.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q)
      ),
    })).filter(category => category.apps.length > 0);
  }, [query]);

  const styles = useStyles();

  return (
    <div className={styles.main}>
      <Title1>Apps</Title1>
      <Text>Access all your apps and services in one place</Text>

      <SearchBox
        id="app-search"
        placeholder="Search apps and services"
        value={query}
        onChange={(_: SearchBoxChangeEvent, d: InputOnChangeData) =>
          setQuery(d.value)
        }
        className={styles.search}
      />

      {filteredApps.length === 0 && (
        <Text>No apps found</Text>
      )}

      {filteredApps.map(category => (
        <div key={category.id} className={styles.category}>
          <Subtitle1 className={styles.categoryTitle}>
            {category.name}
          </Subtitle1>
          <div className={styles.apps}>
            {category.apps.map(app => (
              <AppCard key={app.id} {...app} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}