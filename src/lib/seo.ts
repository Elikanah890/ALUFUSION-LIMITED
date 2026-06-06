const SITE_URL = "https://867alufusionlimited.co.tz";
const SITE_NAME = "867 ALUFUSION LIMITED";
const DEFAULT_DESCRIPTION =
  "Premium aluminium and glass works company in Tanzania. Precision fabrication, modern glass works, steel fabrication, installation, and maintenance for residential, commercial, and industrial projects.";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  schema?: Record<string, unknown>;
};

export function applySEO(props: SEOProps) {
  const {
    title,
    description,
    path = "/",
    image = "/images/hd.jpeg",
    type = "website",
    schema,
  } = props;

  const fullTitle = path === "/" ? `${title} — ${SITE_NAME}` : `${title} | ${SITE_NAME}`;
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  document.title = fullTitle;

  const metaTags: Record<string, string> = {
    description,
    "og:title": fullTitle,
    "og:description": description,
    "og:url": url,
    "og:image": imageUrl,
    "og:type": type,
    "og:site_name": SITE_NAME,
    "og:locale": "en_TZ",
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:card": "summary_large_image",
    "twitter:title": fullTitle,
    "twitter:description": description,
    "twitter:image": imageUrl,
  };

  const names: Record<string, string> = {
    description: "name",
    "og:title": "property",
    "og:description": "property",
    "og:url": "property",
    "og:image": "property",
    "og:type": "property",
    "og:site_name": "property",
    "og:locale": "property",
    "og:image:width": "property",
    "og:image:height": "property",
    "twitter:card": "name",
    "twitter:title": "name",
    "twitter:description": "name",
    "twitter:image": "name",
  };

  for (const [key, value] of Object.entries(metaTags)) {
    let meta = document.querySelector(
      `meta[${names[key] || "name"}="${key}"]`,
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(names[key] || "name", key);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", value);
  }

  let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);

  if (schema) {
    removeJSONLD();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema, null, 2);
    script.setAttribute("data-seo", "true");
    document.head.appendChild(script);
  }
}

function removeJSONLD() {
  document.head
    .querySelectorAll('script[data-seo][type="application/ld+json"]')
    .forEach((el) => el.remove());
}

export function getDefaultDescription() {
  return DEFAULT_DESCRIPTION;
}

export { SITE_URL, SITE_NAME };
