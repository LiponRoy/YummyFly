import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import { auth } from "@/auth";

import { redirect } from "next/navigation";
import Logout from "@/components/Logout";

const Profile = async () => {
    const session = await auth();

    if (!session?.user) redirect("/");

    return (
        <div className="flex flex-col items-center m-4 mt-28">
            <h1 className="text-3xl my-2">Welcome, {session?.user?.name}</h1>
            <Image
                src={session?.user?.image || "/bee.png"}
                alt={session?.user?.name || "no Image"}
                width={72}
                height={72}
                className="rounded-full"
            />
            <Logout />
        </div>
    );
};

export default Profile;