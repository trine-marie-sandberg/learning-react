import React from "react";
import styles from "./style.module.css";
import { Buttons } from "../components/button";

export function HomePage() {
    return(
        <div className = {styles.wrapper}>
            <span className = {styles.mainContent}>
              <h1>Welcome to my React App !</h1>
              <Buttons></Buttons>
              <p>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dignissimos vero 
                 molestias voluptate tempora! Hic voluptas maxime explicabo. Aspernatur officiis laborum nesciunt saepe 
                 accusantium praesentium repudiandae modi sunt repellat quisquam.
              </p>
            </span>
        </div>
    )
}