import { supabase } from "@/lib/supabase";
import ProjectCard from "@/components/ProjectCard";
import OrganicAnimation from "@/components/OrganicAnimation";

export default async function Page() {
  const { data: projects } = await supabase.from("projects").select("*");

  return (
    <OrganicAnimation>
      <main className="min-h-screen p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-12">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </OrganicAnimation>
  );
}
