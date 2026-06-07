// Maps person id -> bundled local image URL.
// Photos are real .jpg files in src/data/images/, bundled by Vite so the app
// works fully offline (no CDN fetch at runtime).

const modules = import.meta.glob<string>("./images/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const photoMap: Record<string, string> = {};
for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/\/([^/]+)\.jpg$/);
  if (match && url) {
    photoMap[match[1]] = url;
  }
}

export function personPhoto(id: string): string {
  return photoMap[id] ?? "";
}
