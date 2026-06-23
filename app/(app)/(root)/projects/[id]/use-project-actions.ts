import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Journal, ProjectResource } from "@/lib/types";

export function useProjectActions(
	projectId: string,
	onJournalCreated: (id: string) => void,
) {
	const router = useRouter();
	const [creatingJournal, setCreatingJournal] = useState(false);
	const [addingJournalId, setAddingJournalId] = useState<string | null>(null);
	const [savingLink, setSavingLink] = useState(false);
	const [savingNote, setSavingNote] = useState(false);
	const [savingQuestion, setSavingQuestion] = useState(false);
	const [uploadingFile, setUploadingFile] = useState(false);

	async function createJournal() {
		setCreatingJournal(true);
		try {
			const res = await fetch("/api/journals", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ projectId }),
			});
			if (!res.ok) return;
			const data = (await res.json()) as { id: string };
			onJournalCreated(data.id);
		} finally {
			setCreatingJournal(false);
		}
	}

	async function addExistingJournal(
		journalId: string,
		onSuccess: (updated: Journal) => void,
	) {
		setAddingJournalId(journalId);
		try {
			const res = await fetch(`/api/journals/${journalId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ projectId }),
			});
			if (!res.ok) return;
			const updated = (await res.json()) as Journal;
			onSuccess(updated);
		} finally {
			setAddingJournalId(null);
		}
	}

	async function removeJournalFromProject(journalId: string) {
		const res = await fetch(`/api/journals/${journalId}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ projectId: null }),
		});
		return res.ok;
	}

	async function uploadFile(
		file: File,
		onSuccess: (resource: ProjectResource) => void,
	) {
		setUploadingFile(true);
		try {
			const form = new FormData();
			form.append("file", file);
			const uploadRes = await fetch("/api/upload", { method: "POST", body: form });
			if (!uploadRes.ok) return;
			const { url, name } = (await uploadRes.json()) as { url: string; name: string };

			const mimeType = file.type;
			const res = await fetch(`/api/projects/${projectId}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ type: "file", title: name, url, mimeType }),
			});
			if (!res.ok) return;
			const created = (await res.json()) as ProjectResource;
			onSuccess(created);
		} finally {
			setUploadingFile(false);
		}
	}

	async function saveLink(
		title: string,
		url: string,
		onSuccess: (resource: ProjectResource) => void,
	) {
		if (!title.trim() || !url.trim()) return;
		setSavingLink(true);
		try {
			const res = await fetch(`/api/projects/${projectId}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ type: "link", title: title.trim(), url: url.trim() }),
			});
			if (!res.ok) return;
			const created = (await res.json()) as ProjectResource;
			onSuccess(created);
		} finally {
			setSavingLink(false);
		}
	}

	async function saveNote(
		title: string,
		body: string,
		onSuccess: (resource: ProjectResource) => void,
	) {
		if (!title.trim()) return;
		setSavingNote(true);
		try {
			const res = await fetch(`/api/projects/${projectId}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ type: "note", title: title.trim(), body: body.trim() || null }),
			});
			if (!res.ok) return;
			const created = (await res.json()) as ProjectResource;
			onSuccess(created);
		} finally {
			setSavingNote(false);
		}
	}

	async function saveQuestion(
		text: string,
		onSuccess: (resource: ProjectResource) => void,
	) {
		if (!text.trim()) return;
		setSavingQuestion(true);
		try {
			const res = await fetch(`/api/projects/${projectId}/resources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ type: "question", title: text.trim() }),
			});
			if (!res.ok) return;
			const created = (await res.json()) as ProjectResource;
			onSuccess(created);
		} finally {
			setSavingQuestion(false);
		}
	}

	async function deleteResource(id: string) {
		const res = await fetch(`/api/projects/${projectId}/resources/${id}`, {
			method: "DELETE",
		});
		return res.ok;
	}

	return {
		creatingJournal,
		addingJournalId,
		savingLink,
		savingNote,
		savingQuestion,
		uploadingFile,
		createJournal,
		addExistingJournal,
		removeJournalFromProject,
		uploadFile,
		saveLink,
		saveNote,
		saveQuestion,
		deleteResource,
	};
}
