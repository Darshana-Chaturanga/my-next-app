import React, { Suspense } from "react";
import { Button } from "../ui/button";
import MoviesList from "./movies-list";
import { Search } from "lucide-react";
import { Input } from "../ui/input";


export default function FeaturedMovies() {
  return (
    <section
      id="featured"
      className="container px-4 py-12 mr-auto ml-auto md:px-6"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Movies</h2>
          <p className="text-muted-foreground">
            Explore the latest and grates movies that are making waves in the
            cinematic worlds
          </p>
        </div>
        <Button variant="outline">View All</Button>
      </div>

      <div className="space-y-6">
        <div className="border-primary/20 bg-card shadow-xs rounded-lg border p-4">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="text-primary/70 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />

              {/* shadcn input field */}
              <Input
                placeholder="Search movies by title or director"
                className="border-primary/20 pl-9 "
              />
            </div>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="h-96 animate-pulse rounded-lg bg-muted"></div>
          }
        >
          <MoviesList />
        </Suspense>
      </div>
    </section>
  );
}
