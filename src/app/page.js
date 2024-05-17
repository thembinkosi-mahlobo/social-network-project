// import { LockOpen2Icon, CrossCircledIcon } from "@radix-ui/react-icons";
// import AccordionDemo from "./components/Accordion";
// import { fromJSON } from "postcss";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { db } from "@/lib/db";

// import { sql } from "vercel/postgres";

export default async function Home() {
  const musicposts = await db.query(`SELECT FROM musicposts`);
  return (
    <main>
      <SignedOut>
        <div className="">
          <div className="text-center">
            <h1 className="">Welcome to the Music blog</h1>
            <p className="">Is music really a universal language?</p>
            <p className="">
              Who said,music is the univsersal language of mankind?
            </p>
            <p className="">
              Why would Kahlil Gibran suggest, that music is the language of the
              spirit?
            </p>
            <p className="">
              I agree with Hans life is a beautiful melody, only the lyrics are
              messed up!
            </p>
            <h2>So I have to say hell is full of musical amateurs!</h2>
          </div>
          <div className="flex items-center">
            <Image
              src="/Theraphy.png"
              alt="Backgroung Image"
              height={300}
              width={300}
            />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div>
          <div className="">
            <h2>MusicPosts</h2>
            {musicposts.rows.map((musicpost) => {
              return (
                <div key={musicposts.id} className="MusicPost">
                  <h3>{musicposts.artist}</h3>
                  <p>{musicposts.content}</p>
                  <Image
                    src={`/${musicposts.album}.png`}
                    alt={musicposts.album}
                    width={300}
                    height={200}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
