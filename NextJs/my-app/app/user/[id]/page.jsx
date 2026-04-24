// app/user/[id]/page.js

export default async function UserPage({ params }) {
  // We destructure 'id' from the params object
  const { id } = await params;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>User Profile</h1>
      <p>Now showing details for User ID: <strong>{id}</strong></p>
    </main>
  );
}