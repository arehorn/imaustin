## 2024-04-27 - [Optimize Render-Time Data Transformation]
**Learning:** Found a performance anti-pattern in Astro SSR pages where data loaded from a CMS (Sanity) is first transformed into string formats (like arrays stringified with `.join(',')`), only to be immediately parsed back into an array (`.split(',').map(...)`) and deduplicated via `Set` inside the render template's `.map` loop. Additionally, `Date` objects were instantiated and formatted inside the render template loop for each item. Doing heavy string manipulations and date formatting within the React/Astro template render phase causes unnecessary CPU overhead per-request in SSR.
**Action:** Always format data (arrays, strings, and dates) in the upstream data-fetching phase (e.g. mapping over `rawPosts` immediately after the query resolves) before passing it to the view template render loop. This ensures the template strictly consumes pre-computed view props, minimizing per-request computation.
## 2026-05-11 - [Optimize Data Hydration overhead in Components]
**Learning:** Avoid passing `string` fields from components down to child elements only to transform them into an Array in the child component when SSR is enabled. The original data might inherently represent arrays, and doing `.join('
')` only to perform `.split('
')` inside an inner component loop generates useless serialization overhead.
**Action:** When a Sanity query or data mapping natively accesses arrays, pass those arrays down as pre-transformed props to avoid inline deserialization operations within subcomponents.
