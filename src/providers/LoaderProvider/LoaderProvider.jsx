"use client";

import { createContext, useEffect, useState } from "react";

export const LoaderContext = createContext({
  loaderFinished: false,
  setLoaderFinished: () => {},
});

export const LoaderProvider = ({ children }) => {
  // const [loaderFinished, setLoaderFinished] = useState(true);
  const [loaderFinished, setLoaderFinished] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <LoaderContext.Provider value={{ loaderFinished, setLoaderFinished }}>
      {isMounted ? children : null}
    </LoaderContext.Provider>
  );
};
