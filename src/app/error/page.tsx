async function getData() {
  // const endpoint = 'http://localhost:3000/api/posts/';
  // const res = await fetch(endpoint, { cache: 'no-store' });
  // if (res.ok) {
  //   //error here
  //   throw new Error('Failed to fetch data');
  // }
  // const myData = await res.json();
  // return myData;
  return { items: [{ id: 1, title: 'foo' }] };
}

export default async function Blog() {
  const data = await getData();
  const items = data && data.items ? [...data.items] : [];
  return (
    <main>
      <h1>Hello world</h1>
      <p>Posts: </p>

      {items &&
        items.map((item, idx) => {
          return <li key={`post-${idx}`}>{item.title}</li>;
        })}
    </main>
  );
}
