export default async (req) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-admin-pass",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  let store;
  try {
    const { getStore } = await import("@netlify/blobs");
    store = getStore("fuji-availability");
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "blob store unavailable", detail: String(err) }),
      { status: 500, headers }
    );
  }

  if (req.method === "GET") {
    let availability = {};
    try {
      const data = await store.get("state", { type: "json" });
      if (data && typeof data === "object") availability = data;
    } catch (err) {
      // store may be empty on first run
    }
    return new Response(JSON.stringify({ availability }), { status: 200, headers });
  }

  if (req.method === "PUT" || req.method === "POST") {
    let body = {};
    try {
      body = await req.json();
    } catch (err) {
      body = {};
    }
    const pass = body.pass || req.headers.get("x-admin-pass") || "";
    const expected = process.env.ADMIN_PASSPHRASE || "";
    if (!expected || pass !== expected) {
      return new Response(JSON.stringify({ error: "unauthorised" }), { status: 401, headers });
    }
    const incoming = (body.availability && typeof body.availability === "object")
      ? body.availability
      : {};
    let current = {};
    try {
      const data = await store.get("state", { type: "json" });
      if (data && typeof data === "object") current = data;
    } catch (err) {}
    const merged = { ...current, ...incoming };
    await store.setJSON("state", merged);
    return new Response(JSON.stringify({ availability: merged }), { status: 200, headers });
  }

  return new Response(JSON.stringify({ error: "method not allowed" }), { status: 405, headers });
};

export const config = { path: "/api/availability" };
