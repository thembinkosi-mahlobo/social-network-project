import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function Posts() {
  const { userId } = auth();
  const posts = await db.query(`
  SELECT
    posts.id,
    post.content,
    proflies.username
    FROM posts
    INNER JOIN profiles ON posts.profile_id = profiles.id;`);

  async function handleAddPost(formData) {
    "use server";
    const content = formData.get("formData");

    const result = await db.query(
      `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
    );
    const profileId = result.rows(0).id;

    await db.query(`
      INSERT INTO posts (profile_id, content) VALUES (${profileId}, '${content}')`);
  }
  return (
    <div>
      <h1>Posts</h1>
      <SignedIn>
        <h2>Create new post</h2>
        <form action={handleAddPost}>
          <textarea name="content" placeholder="New post"></textarea>
          <button className="button styled" type="button">
            Submit
          </button>
        </form>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">Please sign in</Link>
        <br />
        <Link href="/sign-up">or sign up</Link>
      </SignedOut>
    </div>
  );
}
