import { useContext } from "react";
import { QusetionContext } from "./context/QuestionContext";

export function useQuestion(){
  const context =useContext(QusetionContext)
  if(!context){
    throw new Error("error in the context")
  }
  return context
}