import { cpSync, mkdirSync, writeFileSync, existsSync } from "fs";

// 1. .vercel/output 디렉토리 구조 생성
mkdirSync(".vercel/output/static", { recursive: true });
mkdirSync(".vercel/output/functions/ssr.func", { recursive: true });

// 2. 정적 에셋 복사 (dist/client → .vercel/output/static)
if (existsSync("dist/client")) {
  cpSync("dist/client", ".vercel/output/static", { recursive: true });
}

// 3. 서버 번들 복사 (dist/server → 함수 디렉토리)
if (existsSync("dist/server")) {
  cpSync("dist/server", ".vercel/output/functions/ssr.func", { recursive: true });
}

// 4. Node.js 함수 어댑터 작성 (Web Fetch API → Vercel Node.js)
writeFileSync(
  ".vercel/output/functions/ssr.func/index.js",
  `import handler from './server.js';

export default async function(req, res) {
  const proto = req.headers['x-forwarded-proto'] ?? 'https';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;
  const url = \`\${proto}://\${host}\${req.url}\`;

  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v != null) headers.set(k, Array.isArray(v) ? v.join(', ') : v);
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = ['GET', 'HEAD'].includes(req.method) ? null : Buffer.concat(chunks);

  const request = new Request(url, { method: req.method, headers, body });
  const response = await handler.fetch(request, {}, {});

  res.statusCode = response.status;
  for (const [k, v] of response.headers.entries()) res.setHeader(k, v);

  const buf = await response.arrayBuffer();
  res.end(Buffer.from(buf));
}
`
);

// 5. Vercel 함수 설정
writeFileSync(
  ".vercel/output/functions/ssr.func/.vc-config.json",
  JSON.stringify({ runtime: "nodejs20.x", handler: "index.js", launcherType: "Nodejs" }, null, 2)
);

// 6. 라우팅 설정 (정적 파일 우선, 나머지는 SSR)
writeFileSync(
  ".vercel/output/config.json",
  JSON.stringify(
    {
      version: 3,
      routes: [
        {
          src: "/assets/(.*)",
          headers: { "cache-control": "public, max-age=31536000, immutable" },
          continue: true,
        },
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/ssr" },
      ],
    },
    null,
    2
  )
);

console.log("✓ .vercel/output 생성 완료");
