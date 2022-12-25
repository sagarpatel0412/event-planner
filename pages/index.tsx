import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import RegForm from "../components/RegistrationForm/RegForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>
      <RegForm />
    </>
  );
}
