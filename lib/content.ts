import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "content");

export interface Prediction {
  slug: string;
  title: string;
  description: string;
  team: string;
  flag: string;
  group: string;
  date: string;
  image: string;
  content: string;
  contentHtml?: string;
}

export async function getAllPredictions(): Promise<Prediction[]> {
  const dir = path.join(contentDirectory, "predicciones");
  if (!fs.existsSync(dir)) return [];

  const fileNames = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const predictions = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || "",
      description: data.description || "",
      team: data.team || "",
      flag: data.flag || "🏳️",
      group: data.group || "-",
      date: data.date || new Date().toISOString().split("T")[0],
      image: data.image || "",
    } as Prediction;
  });

  return predictions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPredictionBySlug(
  slug: string
): Promise<Prediction | null> {
  const fullPath = path.join(
    contentDirectory,
    "predicciones",
    `${slug}.md`
  );
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const contentHtml = await marked(content);

  return {
    slug,
    content,
    contentHtml,
    title: data.title || "",
    description: data.description || "",
    team: data.team || "",
    flag: data.flag || "🏳️",
    group: data.group || "-",
    date: data.date || new Date().toISOString().split("T")[0],
    image: data.image || "",
  };
}
