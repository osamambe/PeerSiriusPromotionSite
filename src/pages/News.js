import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function News() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="section"
      // 【修正】ヘッダーの高さ分パディングを追加
      style={{
        background: "var(--bg-space)",
        minHeight: "calc(100vh - 80px)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        {/* 【修正】section-title クラスと data-title 属性を追加、フォントも変更 */}
        <h2
          className="section-title"
          data-title="NEWS"
          style={{ fontFamily: "var(--font-display)", marginBottom: "40px" }}
        >
          NEWS
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto 60px",
            color: "var(--text-star)",
            fontFamily: "var(--font-body)",
          }}
        >
          最新情報やプレスリリースをこちらでお届けします。
        </p>

        {/* ニュースリストのプレースホルダー */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "left",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              style={{
                borderBottom: "1px dashed #333",
                padding: "15px 0",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  color: "var(--accent-cyan)",
                  fontWeight: "600",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                }}
              >{`2025.10.0${i} - 最新アップデート情報`}</p>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-star)",
                  fontFamily: "var(--font-body)",
                }}
              >
                新しい機能とパフォーマンスの改善について。
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
