import Link from "next/link";
import Image from "next/image";
import moment from "moment";

export default function Project({ project }) {
    return (
        <div className="flex justify-between text-gray-500 mb-8">
            <div className="max-w-10">
                <p className="text-3xl">
                    {" "}
                    <Link href={`/portfolio/${project.name}`}>{project.name}</Link>
                </p>
                <p className="my-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <p className="text-sm">Publised on {moment().format("LL")}</p>
            </div>
            <Link href={`/portfolio/${project.name}`}><Image src="/linkedin.svg" width={600} height={400} /></Link>
        </div>
    );
}
