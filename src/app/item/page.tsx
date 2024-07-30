"use client"

import Link from "next/link";
import styles from "./item.module.css";
import { useEffect, useState } from "react";


export default function Item(key: any) {  
   console.log(key);
    return (
      <main className={styles.cardsmain}>        
        Привет Item! 
        <Link href={'/'} className={styles.backtomain}> Вернуться на Главную </Link>
      </main>    
    );
  }
  