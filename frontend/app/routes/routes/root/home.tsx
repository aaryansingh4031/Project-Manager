import React from "react";
import type { Route } from "../../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { BarChart3, CheckCircle2, ListChecks, Users } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub — Organize work. Deliver on time." },
    { name: "description", content: "Powerful features help teams stay organized and deliver projects on time." },
  ];
}

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header className="header py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
            <div className="rounded-md bg-blue-600 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-primary-foreground"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
            </div>
            </Link>
            <span className="text-lg font-semibold tracking-tight">TaskHub</span>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/sign-in">
              <Button variant="outline" className="px-4">Log in</Button>
            </Link>
            <Link to="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-32 grid lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_550px] gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-700 bg-white shadow-sm">
            The modern task platform
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl xl:text-6xl/none font-bold tracking-tight text-balance">
            Our powerful features help teams stay organized and deliver projects on time
          </h1>

          <p className="mt-4 text-lg text-gray-700 md:text-xl/relaxed max-w-[700px]">
            Work together seamlessly with your team in shared workspaces with real-time updates.
          </p>
          <p className="mt-2 text-gray-700">
            Organize tasks with priorities, due dates, comments, and track progress visually.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Link to="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Sign up for free
              </Button>
            </Link>
          </div>
           <ul className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mt-3">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No credit card required</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Free plan available</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Cancel anytime</li>
                </ul>

          <p className="mt-3 text-sm text-gray-600">
            Get started in minutes and see improved team productivity
          </p>
        </div>

        {/* Right-side dashboard preview card */}
        <div className="glass-panel rounded-xl border p-4 shadow-lg">
          {/* Window top bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">

            </div>
          </div>

          {/* Mock dashboard image */}
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border bg-gray-100">
            <img
              src="/image0.png"
              alt="Analytics preview"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Quick stats */}
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border p-3">
              <p className="text-gray-600">Project Status</p>
              <p className="mt-1 font-semibold">45% In Progress</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-gray-600">Task Priority</p>
              <p className="mt-1 font-semibold">High • Medium • Low</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-3 mb-10">
              <p className="text-sm text-muted-foreground">Our Features</p>
              <h2 className="text-3xl md:text-4xl font-bold">Everything you need to manage tasks effectively</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Our powerful features help teams stay organized and deliver projects on time</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 ml-14">
              <article className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <Users className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground">Work together seamlessly with your team in shared workspaces with real-time updates.</p>
              </article>
              <article className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <ListChecks className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Task Management</h3>
                <p className="text-muted-foreground">Organize tasks with priorities, due dates, comments, and track progress visually.</p>
              </article>
              <article className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <BarChart3 className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">Visualize project progress with beautiful charts and get insights into team productivity.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-3 mb-10">
              <p className="text-sm text-muted-foreground">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold">Simple process, powerful results</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Get started in minutes and see improved team productivity</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 ml-14">
              <article className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <h3 className="text-xl font-semibold mb-2">Create an account</h3>
                <p className="text-muted-foreground">Sign up for free and set up your first workspace in seconds.</p>
              </article>
              <article className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <h3 className="text-xl font-semibold mb-2">Invite your team</h3>
                <p className="text-muted-foreground">Add your team members and start collaborating right away.</p>
              </article>
              <article className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <h3 className="text-xl font-semibold mb-2">Get things done</h3>
                <p className="text-muted-foreground">Create projects, assign tasks, and track progress in real-time.</p>
              </article>
            </div>
          </div>
        </section>

      {/* CTA strip */}
      <section className="bg-blue-50 py-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-800 font-medium">
            Sign up for free and set up your first workspace in seconds.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create workspace</Button>
            </Link>
            <Link to="/sign-in">
              <Button variant="outline">Already a user?</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4 lg:px-8 text-sm text-gray-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} TaskHub</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
