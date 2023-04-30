import "@/styles/globals.css";
// import { store } from "../store";
// import { Provider } from "react-redux";
import Layout from "@/components/layout/layout";
import StateProvider from "@/components/stateContext/stateProvider";
export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
    // </Provider>
  );
}
