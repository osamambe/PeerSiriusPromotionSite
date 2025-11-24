import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Blog() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="section"
      style={{
        background: "var(--bg-color)",
        minHeight: "80vh",
        padding: "100px 20px",
      }}
    >
      <div className="container">
        <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>BLOG</h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            color: "var(--text-sub)",
          }}
        >
          開発チームからの最新の洞察と記事。
        </p>
      </div>
    </motion.div>
  );
}
