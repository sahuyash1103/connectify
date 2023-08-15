export default async function httpRequest(url, methode, { headers, body }) {
  try {
    const res = await fetch("http://localhost:3001/api/" + url, {
      method: methode,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body:
        body &&
        JSON.stringify({
          ...body,
        }),
    });

    if (res?.ok) {
      const json = await res.json();
      return { data: json, status: res.status, headers: res.headers };
    }

    const text = await res.text();
    return { data: text, status: res.status, headers: res.headers };
  } catch (e) {
    console.log("[server error]: ", e);
  }
}
