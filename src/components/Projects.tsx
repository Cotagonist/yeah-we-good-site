const projects = ['Varila', 'Hyperstream', 'Digio', 'Succulents'];

export default function Projects() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12">
      {projects.map((name, i) => (
        <div
          key={i}
          className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-xl font-semibold"
        >
          {name}
        </div>
      ))}
    </section>
  );
}
