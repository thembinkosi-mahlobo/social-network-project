// import { LockOpen2Icon, CrossCircledIcon } from "@radix-ui/react-icons";
// import AccordionDemo from "./components/Accordion";
// import { fromJSON } from "postcss";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

// import { sql } from "vercel/postgres";

export default async function Home() {
  // const MusicPost = await sql`SELECT FROM MusicPost`;
  return (
    <main>
      <div>
        <Header />
        <div className="">
          <div className="text-center">
            <h1 className="Welcome to Music blog"></h1>
            <p className="Is music really a universal language?"></p>
            <p className="who said,music is the univsersal language of mankind?"></p>
            <p className="why would Kahlil Gibran suggest, that  music is the language of the spirit?"></p>
            <p className="I agree with Hans life is a eautiful melody, only the lyrics are messed up!"></p>
            <h2>So you have hell is full of musical amateurs!</h2>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
