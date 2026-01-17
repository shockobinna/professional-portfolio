import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <PageTransition>
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4">
        I’m a software developer transitioning into a full-time development role.
      </p>
    </main>
    </PageTransition>
  );
}
