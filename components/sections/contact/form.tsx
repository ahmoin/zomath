"use client";

import { Call02Icon, MailSend01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
	{
		title: "Call Us Today!",
		value: "(555) 123-4567",
		icon: <HugeiconsIcon icon={Call02Icon} strokeWidth={2} />,
	},
	{
		title: "Send an Email",
		value: "schools@zomath.com",
		icon: <HugeiconsIcon icon={MailSend01Icon} strokeWidth={2} />,
	},
];

export function ContactForm() {
	return (
		<div className="relative mx-auto w-full max-w-lg">
			<div className="border-b px-6 py-8">
				<div className="mb-8 flex flex-col gap-2">
					<h1 className="font-semibold text-xl md:text-2xl">Get in touch</h1>
					<p className="text-muted-foreground text-sm">
						Have a question, feedback, or want to bring Zomath to your school?
						<br /> We would love to hear from you.
					</p>
				</div>
				<div className="grid gap-2 md:grid-cols-2">
					{contactInfo.map((item) => (
						<div className="flex items-center gap-4 p-2" key={item.title}>
							<div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
								{item.icon}
							</div>
							<div className={cn("flex flex-col gap-y-0.5")}>
								<h2 className="text-sm">{item.title}</h2>
								<p className="text-muted-foreground text-xs">{item.value}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="px-6 py-8">
				<div className="mb-8 flex flex-col gap-1.5">
					<h2 className="font-medium text-xl">Send a message</h2>
					<p className="text-muted-foreground text-sm">
						Fill out the form below and our team will get back to you shortly.
					</p>
				</div>
				<Form />
			</div>
		</div>
	);
}

function Form() {
	return (
		<form className="w-full">
			<FieldGroup>
				<div className="grid grid-cols-2 gap-4">
					<Field>
						<FieldLabel htmlFor="first-name">First name</FieldLabel>
						<Input autoComplete="off" id="first-name" placeholder="Jane" />
					</Field>
					<Field>
						<FieldLabel htmlFor="last-name">Last name</FieldLabel>
						<Input autoComplete="off" id="last-name" placeholder="Smith" />
					</Field>
				</div>
				<Field>
					<FieldLabel htmlFor="email">Work email</FieldLabel>
					<Input
						autoComplete="off"
						id="email"
						placeholder="jane.smith@school.edu"
						type="email"
					/>
				</Field>
				<Field>
					<FieldLabel htmlFor="school">School or district</FieldLabel>
					<Input
						autoComplete="off"
						id="school"
						placeholder="Lincoln High School"
					/>
				</Field>
				<Field>
					<FieldLabel htmlFor="message">Message</FieldLabel>
					<Textarea
						autoComplete="off"
						id="message"
						placeholder="Tell us about your school's needs, timeline, or any questions you have..."
					/>
				</Field>
			</FieldGroup>
			<Button className="mt-8 w-full" type="submit">
				Send message
			</Button>
		</form>
	);
}
