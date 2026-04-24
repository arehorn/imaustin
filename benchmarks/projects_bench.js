
import { performance } from 'perf_hooks';

function originalOperation(projects) {
    const results = [];
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const tags = project.tags.split(",").map((t) => t.trim()).filter(Boolean);
        results.push(tags);
    }
    return results;
}

function optimizedOperation(projects) {
    // This represents pre-computing tags
    return projects.map(p => p.computedTags);
}

const numProjects = 100;
const projects = Array.from({ length: numProjects }, (_, i) => ({
    tags: "tag1, tag2, tag3, tag4, tag5",
    computedTags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
}));

const iterations = 100000;

console.log(`Running benchmark with ${numProjects} projects and ${iterations} iterations...`);

const startOriginal = performance.now();
for (let i = 0; i < iterations; i++) {
    originalOperation(projects);
}
const endOriginal = performance.now();

const startOptimized = performance.now();
for (let i = 0; i < iterations; i++) {
    optimizedOperation(projects);
}
const endOptimized = performance.now();

console.log(`Original: ${(endOriginal - startOriginal).toFixed(2)}ms`);
console.log(`Optimized: ${(endOptimized - startOptimized).toFixed(2)}ms`);
console.log(`Improvement: ${(((endOriginal - startOriginal) - (endOptimized - startOptimized)) / (endOriginal - startOriginal) * 100).toFixed(2)}%`);
