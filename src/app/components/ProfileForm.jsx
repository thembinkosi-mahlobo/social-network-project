import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export default function ProfileForm() {
  const { userId } = auth();
  async function handleUpdatesProfile(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");

    await db.query(
      `UPDATE profiles SET username = '${username}', bio='${bio}' WHERE clerk_id ='${userId}'`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <h2>Update Profile</h2>
      <form action={handleUpdatesProfile}>
        <p> Add a Username!</p>
        <input name="username" placeholder="Username" />
        <input name="bio" placeholder="bio" />
        <button>Submit</button>
      </form>
    </div>
  );
}
