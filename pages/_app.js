import "@/styles/globals.css";
// import { store } from "../store";
// import { Provider } from "react-redux";
import Layout from "@/components/layout/layout";
import VendorLayout from "@/components/vendor/layout";
import StateProvider from "@/components/stateContext/stateProvider";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const {pathname} = useRouter()

  return (
    // <Provider store={store}>
    <StateProvider>
    <div>
      {pathname.startsWith('/vendor') ? (
        <VendorLayout>
          <Component {...pageProps} />
        </VendorLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      </div>
    </StateProvider>
    // </Provider>
  );
}
