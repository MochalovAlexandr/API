"use client"

import styles from "./page.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
// import 'swiper/css/autoplay';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import { dataApi } from "./getDataWithRtkq";



export default function Page() {
  // const [data, setData] = useState();
  const dispatch = useDispatch();
  const dataRedux = useSelector((state: RootState) => state.data.data);

  const {data } = dataApi.useGetProductListQuery();
  console.log(data);
  dispatch({type: 'data/dataFromApi', payload: data});
  // console.log(dataRedux);

  type Data = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
  }

  // useEffect(()=>{
  //   const fetchData = async (): Promise<any>=> {
  //     const response = await fetch('https://fakestoreapi.com/products?limit=5');
  //     if(response.ok){
  //       const data = await response.json();

        // setData(data);
        // console.log(data);
        // dispatch({type: 'data/dataFromApi', payload: data});
  //     }      
  //   }
  //   fetchData();
    
  // },[dispatch]);

  // console.log(store)
  

  // dispatch({type: 'data', payload: data});
  


  return (
      <main className={styles.main}>
        <h1 className={styles.title}>Слайдер</h1>        
          <div className={styles.swiperwrap}>
          <Swiper className={styles.swiper}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {dataRedux && (dataRedux as Data[]).map(({id, title, price, description, image})=>(
              <SwiperSlide key={id} className={styles.swiperslide}>
                <Link href={`/item/${id}`} className={styles.link}>
                  <h2>{title}</h2>
                  <span>{price}</span>
                  <p className={styles.description}>{description}</p>
                  <img width={50}  height={50} className={styles.image} src={image} alt="img"/>
                </Link>
              </SwiperSlide>)
            )}           
          </Swiper>
          <Link href={'/cards'} className={styles.button}>Смотреть все</Link>        
        </div>
      </main>    
  );
}
