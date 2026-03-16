# SPA

> <https://vercel.com/docs/project-configuration#rewrites-examples>

Use the following `vercel.json` at the root of the project.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
