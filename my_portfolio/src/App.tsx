import { useState } from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import Content from "./component/content/Content";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import useGetMessage from "./lang/hooks/useGetMessage";
import { LOCALES } from "./lang/locales";

function App() {
  const defaultLang = window.navigator.language;

  const [lang, setLang] = useState(defaultLang);

  const changeLang = () => {
    if (lang === LOCALES.ENGLISH) {
      setLang(LOCALES.RUSSIAN);
    } else {
      setLang(LOCALES.ENGLISH);
    }
  };

  const messages = useGetMessage({ locale: lang });
  return (
    <IntlProvider locale={lang} messages={messages}>
      <Header callback={changeLang} />
      <Content />
      <Footer />
    </IntlProvider>
  );
}

export default App;
