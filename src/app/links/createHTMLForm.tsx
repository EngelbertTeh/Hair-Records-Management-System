'use client';

export default function LinksCreateHTMLForm() {
  return (
    <>
      <form action="/api/links" method="POST">
        <input type="text" name="url" placeholder="Key in something here" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
