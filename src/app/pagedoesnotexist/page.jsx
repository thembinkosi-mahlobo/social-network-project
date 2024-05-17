export default function BrokenPage() {
  throw new error("Something went wrong");

  return (
    <div>
      <h2>An error occured</h2>
      <p>Sorry nothing to see?</p>
    </div>
  );
}
