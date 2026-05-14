"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase.from("projects").select("*");
      if (data) setProjects(data as any);
    }
    fetchProjects();
  }, []);

  return (
    <main>
      <h1>Admin</h1>
      {projects.map((project: any) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </main>
  );
}
