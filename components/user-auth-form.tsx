"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export function UserAuthForm({
	initialState = "log-in",
	className,
	...props
}: React.ComponentProps<"div"> & {
	initialState: "sign-up" | "log-in";
}) {
	const router = useRouter();

	const signUpSchema = z.object({
		name: z
			.string()
			.min(1, "Name is required")
			.min(2, "Name must be at least 2 characters")
			.max(50, "Name must be less than 50 characters")
			.refine((value) => !/\d/.test(value), {
				message: "Name must not contain numbers",
			}),

		email: z
			.string()
			.min(1, "Email is required")
			.email("Please enter a valid email address"),

		password: z
			.string()
			.min(1, "Password is required")
			.min(8, "Password must be at least 8 characters")
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
				"Password must contain at least one uppercase letter, one lowercase letter, and one number",
			),
	});

	const logInSchema = z.object({
		email: z
			.string()
			.min(1, "Email is required")
			.email("Please enter a valid email address"),

		password: z.string().min(1, "Password is required"),
	});

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const signUpForm = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});
	const logInForm = useForm<z.infer<typeof logInSchema>>({
		resolver: zodResolver(logInSchema),
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const [state, setState] = React.useState<"sign-up" | "log-in">(initialState);

	async function onSignUpFormSubmit(data: z.infer<typeof signUpSchema>) {
		setIsLoading(true);
		await authClient.signUp.email(
			{
				email: data.email,
				password: data.password,
				name: data.name,
			},
			{
				onRequest: () => {},
				onSuccess: () => {
					router.push("/");
					toast.success("Account created successfully");
					setIsLoading(false);
				},
				onError: (ctx: { error: { message: string } }) => {
					toast.error(ctx.error.message);
					setIsLoading(false);
				},
			},
		);
		setIsLoading(false);
	}

	async function onLogInFormSubmit(data: z.infer<typeof logInSchema>) {
		setIsLoading(true);
		await authClient.signIn.email(
			{
				email: data.email,
				password: data.password,
			},
			{
				onRequest: () => {},
				onSuccess: () => {
					router.push("/");
					toast.success("Logged in successfully");
					setIsLoading(false);
				},
				onError: (ctx: { error: { message: string } }) => {
					toast.error(ctx.error.message);
					setIsLoading(false);
				},
			},
		);
		setIsLoading(false);
	}

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		if (state === "sign-up") {
			signUpForm.handleSubmit(onSignUpFormSubmit)();
		} else {
			logInForm.handleSubmit(onLogInFormSubmit)();
		}
	}

	return (
		<>
			<div className="flex flex-col gap-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					{state === "log-in" ? "Log in" : "Sign up"} to Ardemy
				</h1>
			</div>
			<div className={cn("grid gap-6", className)} {...props}>
				<div className="flex items-center justify-center gap-2">
					<Button
						className="flex-1"
						variant="outline"
						type="button"
						disabled={isLoading}
						onClick={async () =>
							await authClient.signIn.social({
								provider: "google",
								callbackURL: "/",
							})
						}
					>
						{isLoading ? <Spinner /> : <Icons.google className="mr-2 size-4" />}{" "}
						Google
					</Button>
					<Button
						className="flex-1"
						variant="outline"
						type="button"
						disabled={isLoading}
						onClick={async () =>
							await authClient.signIn.social({
								provider: "github",
								callbackURL: "/",
							})
						}
					>
						{isLoading ? <Spinner /> : <Icons.gitHub className="mr-2 size-4" />}{" "}
						GitHub
					</Button>
				</div>
				<FieldSeparator>Or continue with</FieldSeparator>
				<form onSubmit={onSubmit}>
					<FieldGroup>
						{state === "sign-up" && (
							<>
								<Controller
									name="name"
									control={signUpForm.control}
									render={({ field, fieldState }) => {
										const isInvalid = fieldState.invalid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel htmlFor={field.name}>Name</FieldLabel>
												<Input
													{...field}
													id={field.name}
													aria-invalid={isInvalid}
													autoComplete="off"
												/>
												<FieldDescription>Enter your name</FieldDescription>
												{isInvalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										);
									}}
								/>
								<Controller
									name="email"
									control={signUpForm.control}
									render={({ field, fieldState }) => {
										const isInvalid = fieldState.invalid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel htmlFor={field.name}>Email</FieldLabel>
												<Input
													{...field}
													type="email"
													id={field.name}
													aria-invalid={isInvalid}
													autoComplete="off"
												/>
												<FieldDescription>
													Enter your email address
												</FieldDescription>
												{isInvalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										);
									}}
								/>
								<Controller
									name="password"
									control={signUpForm.control}
									render={({ field, fieldState }) => {
										const isInvalid = fieldState.invalid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel htmlFor={field.name}>Password</FieldLabel>
												<Input
													{...field}
													type="password"
													placeholder="Enter your password"
													id={field.name}
													aria-invalid={isInvalid}
												/>
												<FieldDescription>
													Must contain uppercase, lowercase, number, and be 8+
													characters
												</FieldDescription>
												{isInvalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										);
									}}
								/>
							</>
						)}
						{state === "log-in" && (
							<>
								<Controller
									name="email"
									control={logInForm.control}
									render={({ field, fieldState }) => {
										const isInvalid = fieldState.invalid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel htmlFor={field.name}>Email</FieldLabel>
												<Input
													{...field}
													type="email"
													id={field.name}
													aria-invalid={isInvalid}
													autoComplete="off"
												/>
												<FieldDescription>
													Enter your email address
												</FieldDescription>
												{isInvalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										);
									}}
								/>
								<Controller
									name="password"
									control={logInForm.control}
									render={({ field, fieldState }) => {
										const isInvalid = fieldState.invalid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel htmlFor={field.name}>Password</FieldLabel>
												<Input
													{...field}
													type="password"
													placeholder="Enter your password"
													id={field.name}
													aria-invalid={isInvalid}
												/>
												{isInvalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										);
									}}
								/>
							</>
						)}
						<Field>
							<Button disabled={isLoading} type="submit">
								{isLoading && <Spinner />}
								{state === "log-in" ? "Log in" : "Sign up"} with Email
							</Button>
						</Field>
					</FieldGroup>
				</form>
			</div>
			<FieldDescription className="px-6 text-center">
				{state === "log-in"
					? "Don't have an account?"
					: "Already have an account?"}
				<Button
					variant="link"
					onClick={() => setState(state === "log-in" ? "sign-up" : "log-in")}
					className="underline hover:opacity-75"
				>
					{state === "log-in" ? "Sign up" : "Log in"}
				</Button>
			</FieldDescription>
			<FieldDescription className="px-6 text-center">
				{" "}
				By {state === "log-in" ? "logging in" : "signing up"}, you agree to our{" "}
				<Link href="/terms">Terms of Service</Link> and{" "}
				<Link href="/privacy">Privacy Policy</Link>.
			</FieldDescription>
		</>
	);
}
