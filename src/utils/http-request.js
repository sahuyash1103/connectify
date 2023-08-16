const apiURL = process.env.NEXT_PUBLIC_CONNECTIFY_API_URL;
export default async function httpRequest(path, methode, { headers, body }) {
  try {
    const res = await fetch(`${apiURL}${path}`, {
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
