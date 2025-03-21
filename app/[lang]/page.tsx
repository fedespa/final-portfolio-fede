import Home from "@/components/Home";
import { WebsiteContent } from "@/interfaces";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}


export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const awaitedParams = await params;
  const { lang } = awaitedParams;

  const finalLang = lang === "en" ? "en" : "es";

  const dictionary: WebsiteContent = await import(
    `@/app/dictionaries/${finalLang}.json`
  ).then((module) => module.default);

  return (
    <>
      <Home content={dictionary} />
    </>
  );
}
