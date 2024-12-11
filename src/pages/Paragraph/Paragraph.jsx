"use client";

import { useState, useContext, useEffect } from "react";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";
import { SplitText } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";
import { presenceAnim, WordsAnim } from "@/helpers/anim";

const Paragraph = ({ text, index = 0, duration = 0.1 }) => {
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);

  const { loaderFinished } = useContext(LoaderContext);

  return (
    <>
      {!isAnimationEnded ? (
        <SplitText
          LetterWrapper={({ letterIndex, children }) => (
            <motion.span
              className="wrapper"
              // onAnimationComplete={() => setIsAnimationEnded(true)}
              {...presenceAnim(WordsAnim, loaderFinished)}
              custom={{ id: (letterIndex + index) * 2, duration }}
            >
              {children}
            </motion.span>
          )}
        >
          {text}
        </SplitText>
      ) : (
        <p>{text}</p>
      )}
    </>
  );
};

export default Paragraph;