import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { courses, getCourseBySlug } from "@/data/courses";
import { CourseDetailClient } from "./CourseDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} | SkillsPro`,
      description: course.shortDescription,
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return <CourseDetailClient course={course} />;
}
