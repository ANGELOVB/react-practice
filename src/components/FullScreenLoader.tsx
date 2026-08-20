import { motion, AnimatePresence } from "framer-motion";

const FullScreenLoader = ({ loading }: { loading: boolean }) => {
  return (
    <AnimatePresence>
      {loading && (
        <>
          {/* Fondo translúcido con fade */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Spinner animado */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[9999]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="w-20 h-20 border-8 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FullScreenLoader;
