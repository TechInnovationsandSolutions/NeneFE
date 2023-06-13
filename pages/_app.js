import "@/styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "@/layout/layout";
import VendorLayout from "@/components/vendor/layout";
import StateProvider from "@/context/accountProvider";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  // Use layout defined at page level
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <StateProvider>
        <div>
          {pathname.includes("/vendor") && pathname.includes("/auth") ? (
            <Component {...pageProps} />
          ) : pathname.includes("/vendor") && !pathname.includes("/auth") ? (
            <VendorLayout>
              <Component {...pageProps} />
            </VendorLayout>
          ) : (
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          )}
        </div>
      </StateProvider>
    </Provider>
  );
}
