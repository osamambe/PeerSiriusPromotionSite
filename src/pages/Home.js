import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// プレースホルダー用コンポーネント (日本語化)
const MovieCard = ({ title, color, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: 1, boxShadow: `0 0 20px ${color}` }}
      style={{
        background: "#000",
        border: `2px solid ${color}`,
        paddingBottom: "56.25%",
        position: "relative",
        cursor: "pointer",
        marginBottom: "20px",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: color,
          fontFamily: "var(--font-body)",
          fontWeight: "bold",
          fontSize: "20px",
          textShadow: `0 0 10px ${color}`,
        }}
      >
        {title}
      </div>
    </motion.div>
  );
};

const NewsItem = ({ date, title, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      style={{
        borderBottom: "1px dashed var(--accent-cyan)",
        padding: "15px 0",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        color: "var(--text-star)",
      }}
    >
      <span
        style={{
          color: "var(--accent-cyan)",
          fontSize: "14px",
          fontFamily: "var(--font-body)",
        }}
      >
        {date}
      </span>
      <span
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "var(--font-body)",
        }}
      >
        {title}
      </span>
    </motion.div>
  );
};

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [moviesTitleRef, moviesTitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [newsTitleRef, newsTitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [moviesRef, moviesInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [newsRef, newsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* 1. ヒーローセクション (巨大な文字と発光) */}
      <section
        ref={heroRef}
        className="section"
        style={{ height: "calc(100vh - 80px)", justifyContent: "center" }}
      >
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="container"
        >
          <h1
            style={{
              fontSize: "clamp(60px, 12vw, 160px)",
              color: "var(--text-star)",
              marginBottom: "30px",
              lineHeight: 0.8,
              fontWeight: 900,
              textShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.05em",
            }}
          >
            Peer Sirius
          </h1>
        </motion.div>
      </section>

      {/* 2. MOVIES SECTION (グリッドとネオン) */}
      <section
        ref={moviesRef}
        className="section"
        style={{ padding: "150px 0", background: "var(--bg-alt)" }}
      >
        <div className="container">
          <h2
            ref={moviesTitleRef}
            className={`section-title ${moviesTitleInView ? "is-visible" : ""}`}
            data-title="MOVIES"
          >
            MOVIES
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              width: "100%",
            }}
          >
            {/* MovieCard を使用 */}
            {["最新MV", "ライブ映像", "インタビュー", "ティザー"].map(
              (title, index) => (
                <MovieCard
                  key={title}
                  title={title}
                  color={
                    index % 2 === 0
                      ? "var(--accent-cyan)"
                      : "var(--accent-pink)"
                  }
                  delay={index * 0.15}
                />
              )
            )}
          </div>

          <div style={{ marginTop: "60px" }}>
            <a href="/videos" className="btn-primary">
              全動画を見る ≫
            </a>
          </div>
        </div>
      </section>

      {/* 3. NEWS SECTION (リストとデジタル感) */}
      <section
        ref={newsRef}
        className="section"
        style={{ padding: "150px 0", background: "var(--bg-space)" }}
      >
        <div className="container">
          <h2
            ref={newsTitleRef}
            className={`section-title ${newsTitleInView ? "is-visible" : ""}`}
            data-title="INFOMATION"
          >
            INFO
          </h2>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              width: "100%",
              border: "1px solid var(--accent-cyan)",
            }}
          >
            {/* NewsItem を使用 */}
            {[
              "「宇宙警察」MV公開！",
              "ファンミーティング開催！",
              "ファンクラブ設立のお知らせ",
            ].map((title, index) => (
              <NewsItem
                key={title}
                date={`2025.${10 + index}.0${index + 1}`}
                title={title}
                delay={0.1 * index}
              />
            ))}
          </div>

          <div style={{ marginTop: "60px" }}>
            <a href="/news" className="btn-primary">
              過去記事を見る ≫
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
