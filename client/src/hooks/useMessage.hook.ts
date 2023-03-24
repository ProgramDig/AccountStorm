import {useCallback} from "react";
import M from "materialize-css";

export const useMessage = () => {
  return useCallback((text: string | null) => {
    if (M && text) {
      M.toast({ html: text});
    }
  },[]);
};