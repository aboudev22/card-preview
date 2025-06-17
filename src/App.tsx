import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [clicked, setClicked] = useState<number | null>(null);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gray-100">
      <div className="relative flex flex-wrap justify-around items-center p-2 bg-blue-300 h-96 w-96 rounded-md">
        {items.map((item, i) => (
          <motion.img
            layoutId={`img-${i}`}
            key={item.title}
            src={item.src}
            alt={item.title}
            onClick={() => setClicked(i)}
            className="w-36 h-36 rounded-md cursor-pointer object-cover"
          />
        ))}
      </div>

      <AnimatePresence>
        {clicked !== null && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed flex justify-center items-center bg-neutral-500/50 top-0 bottom-0 w-full"
            onClick={() => setClicked(null)}
          >
            <motion.div
              layoutId={`img-${clicked}`}
              onClick={() => setClicked(null)}
              className="flex flex-col"
            >
              <motion.img
                src={items[clicked].src}
                alt={items[clicked].title}
                onClick={() => setClicked(null)}
                className="w-64 h-64 cursor-pointer"
              />
              <p className="bg-black text-xs text-white w-full p-2">
                description de l'image
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * ================= Data ==================
 */

const items = [
  { src: "/kakashi.jpg", title: "Kakashi" },
  { src: "/leo-messi.jpg", title: "Leo Messi" },
  { src: "/leo-messi.jpg", title: "Leo Messi 2" },
  { src: "/kakashi.jpg", title: "Kakashi2" },
];
