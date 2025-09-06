import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tech Lens" },
    { name: "description", content: "Resume Scores and More" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
    <div className="page-heading py-16">
    <h1>Track Your Applications</h1>
    <h2>Review your submissions and check AI-powered feedback.</h2>
    </div>
    

            <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
        </section>

  </main>;
}
