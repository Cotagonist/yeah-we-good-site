import Image from 'next/image';

const projects = [
  {
    name: 'Mend Together',
    image: '/projects/project-mend-together.png',
  },
  {
    name: 'FitGMR',
    image: '/projects/project-fitgmr.png',
  },
  {
    name: 'Anpetu Wi',
    image: '/projects/project-anpetu-wi.png',
  },
];


export default function Projects() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12">
      {projects.map((project, i) => (
        <div key={i} className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}
