import { motion } from "framer-motion";
import "./LoginTitle.css";

const words = ["plan", "your day,", "organize", "your life"];

const LoginTitle = () => {

  const windowWidth = window.innerWidth;

  return (
    <div className="login-title w-50 h-100 d-flex align-items-center">
      <div className="login-title-container ms-5 text-center">
        <ul className="">
          {words.map((word, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {word.split(" ").map((individualWord, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  whileHover={{
                    color: "#ADA0FF",
                    fontSize: `${windowWidth <= 1366 ? "100px" : "150px"}`,
                    transition: { type: "spring", stiffness: 100 },
                  }}
                  className={`texts text-${index}-${wordIndex}`}
                >
                  {individualWord}
                </motion.span>
              ))}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoginTitle;
