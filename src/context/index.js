import React from "react";


export const CounterContext = React.createContext(null);

export const Provider = CounterContext.Provider;
export const Consumer = CounterContext.Consumer;

