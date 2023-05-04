import React from "react";
import styles from "./style.module.css";
import { Buttons } from "../components/button";

export function HomePage() {
    return(
        <div className = {styles.wrapper}>
            <span className = {styles.mainContent}>
              <h1>Welcome to my React App !</h1>
              <Buttons>GO</Buttons>
            </span>
        </div>
    )
}