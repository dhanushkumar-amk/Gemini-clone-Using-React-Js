import {createContext} from 'react';
import runChat from '../Config/Gemini';
export const Context = createContext();

const ContextProvider = (props) => {
  const onSend = async (prompt) => {
    await runChat(prompt);
  };

  onSend('What is react js');
  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
