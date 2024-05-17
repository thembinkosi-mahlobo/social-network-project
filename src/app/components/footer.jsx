import Home from "@/app/page";
import Header from "@/app/components/header";

export default function Footer() {
  return (
    <footer>
      <div className="">
        <div
          className="position:absolute;
        bottom: 30px;
        padding :30px;
        gap: 30px;
        color:white;
        align-items: center;"
        >
          <h4>Posts</h4>
          <p>About</p>
          <p>Favourite Music</p>
          <p>Festivals</p>
        </div>
      </div>
    </footer>
  );
}
