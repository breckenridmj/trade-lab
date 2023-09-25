import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar"
import Index from "@/components/grid/Index";
import Responsive from "@/components/test2/Responsive";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  

  return (
    <>
      <Navbar />
      <Responsive />
    </>
  )
}
