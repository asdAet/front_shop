import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import styles from "../assets/css/AdvertisingDashboard.module.css";

const storeName = "Deep Shop";
const discordLink = "https://discord.gg/xsvHSBcN4U";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AdvertisingDashboard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      // move range ±20px
      setOffsetX((x - 0.5) * 40);
      setOffsetY((y - 0.5) * 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.hero} ref={containerRef}>
      <motion.div
        className={styles.background}
        style={{
          x: offsetX,
          y: offsetY,
        }}
      />
      <div className={styles.blur}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className={styles.title}>{storeName}</h1>
          <p className={styles.description}>
            Добро пожаловать в Deep Shop — надёжный магазин с отличной
            репутацией. У нас большой выбор товаров, быстрый сервис и уже
            более 500 довольных покупателей. Загляни — тебе точно понравится!
          </p>
          <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Вступить в Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvertisingDashboard;
