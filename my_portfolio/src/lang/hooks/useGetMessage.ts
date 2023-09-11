import { useMemo } from "react";
import { LOCALES } from "../locales";
import English from "../English";
import Russian from "../Russian";

interface IGetMessage {
  locale: string;
}

function useGetMessage({ locale }: IGetMessage) {
  const messages = useMemo(() => {
    switch (locale) {
      case LOCALES.ENGLISH:
        return English;
        break;
      case LOCALES.RUSSIAN:
        return Russian;
        break;
      default:
        return English;
        break;
    }
  }, [locale]);
  return messages;
}

export default useGetMessage;
