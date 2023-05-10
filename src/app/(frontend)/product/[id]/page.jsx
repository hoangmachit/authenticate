async function detDetail(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function generateMetadata({ params }) {
  const { id } = params;
  const detail = await detDetail(id);
  return {
    title: detail.title,
  };
}
export default async function ProductDetailPage({ params }) {
  const { id } = params;
  const detail = await detDetail(id);
  return (
    <section>
      <h1>Product Home Page ID = {id}</h1>
      {detail && (
        <>
          <ul>
            <li>
              <p>userId: {detail.userId}</p>
            </li>
            <li>
              <p>id: {detail.id}</p>
            </li>
            <li>
              <p>title: {detail.title}</p>
            </li>
            <li>
              <p>completed: {detail.completed}</p>
            </li>
          </ul>
        </>
      )}
    </section>
  );
}
