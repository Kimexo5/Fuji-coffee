module.exports = async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-admin-pass");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL;
  const adminPass = process.env.ADMIN_PASSPHRASE || "";

  if (!appsScriptUrl) {
    res.status(500).json({ error: "APPS_SCRIPT_URL not configured" });
    return;
  }

  try {
    if (req.method === "GET") {
      const r = await fetch(appsScriptUrl + "?action=availability");
      const data = await r.json();
      res.status(200).json(data);
      return;
    }

    if (req.method === "PUT" || req.method === "POST") {
      const body = (req.body && typeof req.body === "object") ? req.body : {};
      const pass = body.pass || req.headers["x-admin-pass"] || "";
      if (!adminPass || pass !== adminPass) {
        res.status(401).json({ error: "unauthorised" });
        return;
      }
      const r = await fetch(appsScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "availability",
          pass: pass,
          availability: body.availability || {}
        })
      });
      const data = await r.json();
      res.status(200).json(data);
      return;
    }

    res.status(405).json({ error: "method not allowed" });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};
