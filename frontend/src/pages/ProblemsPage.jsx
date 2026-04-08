import { useState, useMemo } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon, SearchIcon, XIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];
const problems = Object.values(PROBLEMS);
import { useActiveSessions } from "../hooks/useSessions";


const allTopics = (() => {
  const topicSet = new Set();
  problems.forEach((p) => {
    p.category.split(" • ").forEach((t) => topicSet.add(t.trim()));
  });
  return [...topicSet].sort();
})();

const ProblemsPage = () => {

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [selectedTopics, setSelectedTopics] = useState([]); // array, not single value

  // Toggle a topic on/off
  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)   // remove if already selected
        : [...prev, topic]                   // add if not selected
    );
  };

  const clearFilters = () => {
    setSearch("");
    setDifficulty("All");
    setSelectedTopics([]);
  };

  const filteredProblems = problems
    .filter((p) => difficulty === "All" || p.difficulty === difficulty)
    .filter((p) => {
      if (selectedTopics.length === 0) return true; // no topic filter = show all
      const problemTopics = p.category.split(" • ").map((t) => t.trim());
      // Problem qualifies if it contains AT LEAST ONE selected topic
      return selectedTopics.every((topic) => problemTopics.includes(topic));
    })
    .filter(
      (p) =>
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );

  const hasActiveFilters =
    search !== "" || difficulty !== "All" || selectedTopics.length > 0;

  const easyCount   = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardCount   = problems.filter((p) => p.difficulty === "Hard").length;
  const {data: activeSession, isLoading: loadingSession, error} = useActiveSessions()
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* SEARCH */}
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <SearchIcon className="size-4 opacity-50" />
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="grow"
          />
        </label>

        {/* DIFFICULTY FILTER */}
        <div className="flex gap-2 mb-4">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`btn btn-sm rounded-full ${
                difficulty === d ? "btn-primary" : "btn-ghost"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* TOPIC FILTER */}
        <div className="flex flex-wrap gap-2 mb-4">
          {allTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => toggleTopic(topic)}
              className={`btn btn-xs rounded-full ${
                selectedTopics.includes(topic)
                  ? "btn-secondary"
                  : "btn-outline btn-ghost"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* ACTIVE FILTER SUMMARY + CLEAR */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between mb-4 text-sm text-base-content/60">
            <span>
              Showing {filteredProblems.length} of {problems.length} problems
            </span>
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 hover:text-base-content transition-colors"
            >
              <XIcon className="size-3" />
              Clear filters
            </button>
          </div>
        )}

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {filteredProblems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="card bg-base-100 hover:scale-[1.01] transition-transform"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code2Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold">{problem.title}</h2>
                          <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/60">{problem.category}</p>
                      </div>
                    </div>
                    <p className="text-base-content/80 mb-3">{problem.description.text}</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="font-medium">Solve</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProblems.length === 0 && (
          <div className="text-center py-16 text-base-content/50">
            <Code2Icon className="size-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg font-medium">No problems match your filters</p>
            <button onClick={clearFilters} className="btn btn-sm btn-ghost mt-2">
              Clear filters
            </button>
          </div>
        )}

        {/* STATS FOOTER */}
        <div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className="stat-value text-primary">{problems.length}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easyCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{mediumCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hardCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;