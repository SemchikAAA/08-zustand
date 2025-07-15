import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteHub: Create Note",
  description: "Create new Note",
  openGraph: {
    title: "NoteHub: Create Note",
    description: "Create new Note",
    url: "http://localhost:3000/notes/action/create",
    images: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        {/* NoteForm component */}
        <NoteForm />
      </div>
    </main>
  );
}
