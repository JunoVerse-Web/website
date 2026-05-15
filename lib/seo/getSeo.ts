// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSeo(page: any) {
  return {
    title: page.seo?.title,
    description: page.seo?.description,
    keywords: page.seo?.keywords,
    openGraph: {
      title: page.seo?.title,
      description: page.seo?.description,
      images: page.seo?.ogImage ? [page.seo.ogImage] : [],
    },
    alternates: {
      canonical: page.seo?.canonical,
    },
  };
}