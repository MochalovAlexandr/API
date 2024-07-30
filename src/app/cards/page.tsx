"use client"

import Link from "next/link";
import styles from "./cards.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";


export default function Cards() {  
    const dataRedux = useSelector((state: RootState) => state.data.data)

    type Data = {
      id: number,
      title: string,
      price: number,
      description: string,
      image: string,
    }  

    return (
      <main className={styles.cardsmain}>        
        <ul className={styles.ul}>
        {dataRedux && (dataRedux as Data[]).map(({id, title, price, description, image})=>(
            <li key={id} className={styles.swiperslide}>
              <a href="#" className={styles.link}>
                <h2>{title}</h2>
                <span>{price}</span>
                <p className={styles.description}>{description}</p>
                <img width={50}  height={50} className={styles.image} src={image} alt="img"/>
              </a>
            </li>)
          )} 
        </ul>
        <Link href={'/'} className={styles.backtomain}> Вернуться на Главную </Link>
      </main>    
    );
  }
  