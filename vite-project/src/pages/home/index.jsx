import React from "react";
import styles from "./style.module.css"

export function HomePage() {
    return(
        <div className = {styles.wrapper}>
            <div className = {styles.mainContent}>
              <h1>Welcome to my React App !</h1>
            </div>
        </div>
    )
}