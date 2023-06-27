import styles from "./project.module.scss";
import { project } from "@/types";
import React from "react";

const Project: React.FC<project> = ({ title, repo, preview, used }: project) => {
  return (
    <div className={styles.project__content}>
      <div>
        <span className={styles.project__rounder}></span>
        <span className={styles.project__line}></span>
      </div>
      <div className={[styles.project__data, "bd-grid"].join(" ")}>
        <h3 className={styles.project__title}>{title}</h3>
        <p>
          Live preview:{" "}
          <a target="_blank" href={preview}>
            Click me!
          </a>
        </p>
        <p>
          GitHub repo:{" "}
          <a target="_blank" href={repo}>
            Click me!
          </a>
        </p>
        <p>Technologies used: {used.join(", ")}</p>
      </div>
    </div>
  );
};

export default Project;
