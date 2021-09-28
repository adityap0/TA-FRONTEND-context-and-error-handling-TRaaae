import React from "react";

let DarkContext = React.createContext();
const DarkProvider = DarkContext.Provider;
const DarkConsumer = DarkContext.Consumer;
export { DarkProvider, DarkConsumer, DarkContext };
