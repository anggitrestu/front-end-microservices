import Router from 'next/router';
import { ToastContainer } from 'react-toastify';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'tailwindcss/style.css';
import 'react-toastify/dist/ReactToastify.css';

// * custom app, apapun halaman yang ada akan di tangkap disini dulu, baru di render setelahnya

NProgress.configure({ showSpinner: false }); //show spinner : false
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-center"></ToastContainer>
    </>
  );
}

export default MyApp;
