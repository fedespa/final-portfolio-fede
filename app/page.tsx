import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/en");
  return null;
}
