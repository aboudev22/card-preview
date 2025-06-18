import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="w-screen h-screen bg-green-900 flex justify-center items-center">
      <div className="p-5 w-96 flex flex-wrap justify-center items-center rounded-md gap-2 bg-green-800 border-2 border-green-500">
        {images.map((item, index) => (
          <motion.img
            layoutId={`img-${index}`}
            src={item.src}
            onClick={() => setSelected(index)}
            className="w-36 h-36 rounded-md cursor-pointer"
          />
        ))}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed top-0 bottom-0 w-full flex justify-center items-center bg-neutral-500/20"
          >
            <motion.img
              layoutId={`img-${selected}`}
              src={images[selected].src}
              className="w-60 h-60 cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * ======================= Data ===========================
 */

const images = [
  { src: "/kakashi.jpg", name: "kakashi" },
  { src: "/leo-messi.jpg", name: "leo" },
  { src: "/leo-messi.jpg", name: "leo" },
  { src: "/kakashi.jpg", name: "kakashi" },
];
