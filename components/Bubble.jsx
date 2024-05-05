import { motion, AnimatePresence } from "framer-motion";

const Bubble = ({ style }) => {
  return (
    <AnimatePresence>
      <motion.div
        style={{...style, zIndex: "-1"}}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exist={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.75 }}
      ></motion.div>
    </AnimatePresence>
  );
};

export default Bubble;
