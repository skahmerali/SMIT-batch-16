import Link from "next/link";
export default function NavbarView() {

    const posts = ['first-post', 'second-post'];
    return (
        <div >
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about/details">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/setting">
                        Setting
                    </Link>
                </li>
                <ul>
                    {posts.map((post) => (
                        <li key={post}>
                            <Link href={`/blog/${post}`}>{post}</Link>
                        </li>
                    ))}
                </ul>

            </ul>
        </div>
    );
}
