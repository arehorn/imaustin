## 2024-04-27 - [Optimize Render-Time Data Transformation]
**Learning:** Found a performance anti-pattern in Astro SSR pages where data loaded from a CMS (Sanity) is first transformed into string formats (like arrays stringified with `.join(',')`), only to be immediately parsed back into an array (`.split(',').map(...)`) and deduplicated via `Set` inside the render template's `.map` loop. Additionally, `Date` objects were instantiated and formatted inside the render template loop for each item. Doing heavy string manipulations and date formatting within the React/Astro template render phase causes unnecessary CPU overhead per-request in SSR.
**Action:** Always format data (arrays, strings, and dates) in the upstream data-fetching phase (e.g. mapping over `rawPosts` immediately after the query resolves) before passing it to the view template render loop. This ensures the template strictly consumes pre-computed view props, minimizing per-request computation.

## Tag Processing Optimization

- **Issue:** Multiple array passes (.map, .filter) and Set creation inside a loop for tag deduplication and formatting.
- **Solution:** Consolidated logic into a single-pass utility function `formatTags` that handles trimming, filtering, and deduplication in one loop iteration.
- **Impact:** Measured ~34% performance improvement in micro-benchmarks for tag processing. Reduced memory allocations by avoiding intermediate arrays.
- **Pattern:** Prefer single-pass `for` loops with a `Set` for deduplication over chained array methods when performance is critical or processing happens in a hot path (like SSR render loops).
## 2024-05-18 - [Optimize Sanity Data Fetching]
**Learning:** Making multiple parallel Sanity API requests via `Promise.all` (e.g., 12 separate `client.fetch` calls) incurs unnecessary HTTP overhead, even with HTTP/2 multiplexing. In `src/pages/index.astro`, firing 12 queries concurrently was a bottleneck.
**Action:** Always batch multiple independent GROQ queries into a single combined GROQ object request (e.g., `{ "hero": *[_type=="hero"][0], "about": ... }`). This dramatically reduces network round-trips and lowers query latency.
## 2024-05-18 - [Reduce Main Thread Blocking with ASTRO Islands]
**Learning:** When building with Astro and heavy interactive components (like contact forms in React) below the fold, using `client:visible` instead of `client:load` is highly effective. It avoids downloading and parsing the component JavaScript on initial page load, thus significantly reducing main thread blocking.
**Action:** Always prefer `client:visible` for heavy interactive components rendered outside the initial viewport.
