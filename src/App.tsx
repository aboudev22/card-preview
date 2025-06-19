import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const card = [
    { id: 1, src: "/kakashi.jpg", name: "Kakashi" },
    { id: 2, src: "/leo-messi.jpg", name: "Kakashi" },
    { id: 3, src: "/leo-messi.jpg", name: "Kakashi" },
    { id: 4, src: "/kakashi.jpg", name: "Kakashi" },
  ];
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-transparent">
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {card.map((item, i) => (
          <motion.img
            layoutId={`img-${i}`}
            src={item.src}
            key={item.id}
            className="w-52 h-52 rounded-md cursor-pointer"
            onClick={() => setSelected(i)}
          />
        ))}
        <AnimatePresence>
          {selected !== null && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed top-0 bottom-0 left-0 right-0 bg-neutral-900/10 flex justify-center items-center"
            >
              <motion.img
                onClick={() => setSelected(null)}
                src={card[selected].src}
                layoutId={`img-${selected}`}
                className="w-72 h-72 object-cover cursor-pointer"
              />
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
