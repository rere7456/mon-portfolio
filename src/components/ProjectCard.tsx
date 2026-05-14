export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-background border border-accent-purple/30 p-6 rounded-2xl hover:border-accent-purple transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/20">
      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
      <p className="text-foreground/80">{project.description}</p>
    </div>
  );
}
