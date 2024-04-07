import "@/styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "@/layout/layout";
import VendorLayout from "@/components/vendor/layout";
import StateProvider from "@/context/accountProvider";
import { useRouter } from "next/router";
import AuthLayout from "@/components/admin/layout";
// import { FormProvider } from "react-hook-form";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  // Use layout defined at page level
  const getLayout = Component.getLayout || ((page) => page);


  return (
    <Provider store={store}>
      <StateProvider>
        <div>
          {
          renderAppropriateLayout(pathname,getLayout,Component,pageProps)
          }
        </div>
      </StateProvider>
    </Provider>
  );
}

const renderAppropriateLayout = (pathname,getLayout,Component,pageProps) => {
  if(pathname.includes("/vendor") && pathname.includes("/auth")){

    return <Component {...pageProps} />

  }else if(pathname.includes("/vendor") & !pathname.includes("/auth") && !pathname.includes("/create")  || pathname.includes("super-admin")){

   return( <VendorLayout><Component {...pageProps} /></VendorLayout>)

  }else if(pathname.includes("/vendor") && pathname.includes("/create-product")){

   return getLayout(<Component {...pageProps} />)

  }else if(pathname.includes("/admin")){

    return( <AuthLayout><Component {...pageProps} /></AuthLayout>)
 
  }else {

    return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
  }
}
