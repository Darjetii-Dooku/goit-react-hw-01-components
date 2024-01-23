import React from "react";
import css from "./Statistics.module.css"
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
const Statistics = ({title, stats}) => {
    return (
        <section className={css.stat_section}>
          {title && (
            <h2 className={css.stat_title}>{title}</h2>
          )}
        
      
        <ul className={css.stat_list}>
          {stats.map(item => 
            <li
            key={item.id}
            className={css.stat_item}
            style={{
                backgroundColor: getRandomHexColor(),
                flex: 1,
            }}
            >
            <span 
            >{item.label}</span>
            <span          
            >{item.percentage}%</span>
            </li>
            )}
        </ul>
      </section>
    )
}
export default Statistics