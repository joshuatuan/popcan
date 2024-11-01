import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export function UIProvider({ children }) {
  const [view, setView] = useState("myList");
  const [selectedId, setSelectedId] = useState(null);
  const [userRating, setUserRating] = useState("");

  const handleSelectMovie = (id) => {
    setSelectedId((prevId) => (id === prevId ? null : id));
  };
  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  return (
    <UIContext.Provider
      value={{
        view,
        setView,
        selectedId,
        userRating,
        setUserRating,
        handleSelectMovie,
        handleCloseMovie,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUIContext must be used within a UIContext Provider");
  }
  return context;
};
