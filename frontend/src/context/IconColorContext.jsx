import { createContext, useContext, useEffect, useState, useCallback } from "react";

const IconColorContext = createContext({
  iconColor: "",
  setIconColor: () => {},
  resetIconColor: () => {},
});

export function IconColorProvider({ children }) {
  const [iconColor, setIconColorState] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("motive-icon-color") || "";
  });

  useEffect(() => {
    if (iconColor) {
      localStorage.setItem("motive-icon-color", iconColor);
    } else {
      localStorage.removeItem("motive-icon-color");
    }
  }, [iconColor]);

  const setIconColor = useCallback((color) => {
    setIconColorState(color || "");
  }, []);

  const resetIconColor = useCallback(() => {
    setIconColorState("");
  }, []);

  return (
    <IconColorContext.Provider value={{ iconColor, setIconColor, resetIconColor }}>
      {children}
    </IconColorContext.Provider>
  );
}

export const useIconColor = () => useContext(IconColorContext);
