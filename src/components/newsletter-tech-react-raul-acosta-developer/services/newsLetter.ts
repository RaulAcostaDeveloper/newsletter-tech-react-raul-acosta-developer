interface NewsletterResponse {
  error: boolean;
  message: string;
  coupon_text?: string;
}

export async function postNewsletter(
  email: string,
  apiKey?: string,
): Promise<NewsletterResponse> {
  const body = new URLSearchParams({
    newsletter_user_email: email.trim(),
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
      "X-Newsletter-Api-Key": apiKey ?? "",
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
