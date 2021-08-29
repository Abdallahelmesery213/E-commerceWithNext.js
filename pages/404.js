import Link from "next/link";

export default function Custom404() {
    return (
        <div className="container text-center mt-5">
            <h2> Page Not Found</h2>
            <Link href="/">
                <a>Go Home</a>
            </Link>
        </div>
    )
  }