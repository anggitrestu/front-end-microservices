import '../styles/globals.css';
import '../tailwindcss/style.css';
// * custom app, apapun halaman yang ada akan di tangkap disini dulu, baru di render setalahnya

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
