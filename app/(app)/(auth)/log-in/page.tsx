import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { UserAuthForm } from "@/components/user-auth-form";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
	title: "Log in to your Zomath account",
	description: "Log in to your Zomath account",
};

export default async function AuthenticationPage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (session) {
		return redirect("/");
	}

	return (
		<>
			<div className="md:hidden">
				{/* <Image
					src="/examples/authentication-light.png"
					width={1280}
					height={843}
					alt="Authentication"
					className="block dark:hidden"
					priority
				/>
				<Image
					src="/examples/authentication-dark.png"
					width={1280}
					height={843}
					alt="Authentication"
					className="hidden dark:block"
					priority
				/> */}
			</div>
			<div className="flex items-center justify-center h-screen px-8">
				<div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-smm">
					<UserAuthForm initialState="log-in" />
				</div>
			</div>
		</>
	);
}
