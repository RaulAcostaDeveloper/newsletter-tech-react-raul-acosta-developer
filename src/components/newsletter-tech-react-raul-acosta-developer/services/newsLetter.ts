interface NewsletterResponse {
  error: boolean;
  message: string;
}

export async function postNewsletter(
  email: string,
): Promise<NewsletterResponse> {
  const body = new URLSearchParams({
    newsletter_user_email: email,
    checkbox_accept: "on",
    checkbox_accept_mb: "on",
  });

  const endpoint = import.meta.env.DEV
    ? "/api/newsletter"
    : "https://neubox.com/newsletter";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      "X-Newsletter-Api-Key":
        "6f897086c76602ede819e109eeeb0ff43f4b42212a80b4d48d3bf1fe6d6d8b40",
    },
    body: body.toString(),
  });

  let data: NewsletterResponse;

  try {
    data = (await response.json()) as NewsletterResponse;
  } catch {
    throw new Error("La respuesta del servidor no es JSON válido.");
  }

  if (!response.ok) {
    throw new Error(data.message || "Error en la petición.");
  }

  if (data.error) {
    throw new Error(data.message || "No fue posible suscribirte.");
  }

  return data;
}
