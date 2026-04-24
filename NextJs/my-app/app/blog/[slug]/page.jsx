export default function BlogPost({ params }) {
  // If the URL is /blog/hello-world, params.slug will be "hello-world"
  return <h1>Viewing post: {params.slug}</h1>;
}
