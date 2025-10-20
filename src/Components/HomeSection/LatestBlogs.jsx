"use client";


import Heading3 from "@/Reusable/Heading3";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";



export default function LatestBlogs() {

const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    description: "Learn about the new features and improvements in Next.js 14.",
    date: "3/15/2024",
    readTime: "5 min read",
    link: "/blog/nextjs-14-intro"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS 3",
    description: "Build responsive and modern UIs quickly using Tailwind CSS 3.",
    date: "4/01/2024",
    readTime: "6 min read",
    link: "/blog/tailwind-css-3"
  },
  {
    id: 3,
    title: "React 18 Features You Must Know",
    description: "Explore the latest updates in React 18 and how to use them.",
    date: "4/10/2024",
    readTime: "7 min read",
    link: "/blog/react-18-features"
  },
  {
    id: 4,
    title: "Deploying Next.js Apps on Vercel",
    description: "Step-by-step guide to deploy your Next.js apps on Vercel.",
    date: "4/20/2024",
    readTime: "4 min read",
    link: "/blog/nextjs-vercel-deploy"
  },
  {
    id: 5,
    title: "TypeScript for Beginners",
    description: "Learn TypeScript fundamentals for building scalable apps.",
    date: "5/01/2024",
    readTime: "8 min read",
    link: "/blog/typescript-beginners"
  },
  {
    id: 6,
    title: "Building a Blog with Next.js & Markdown",
    description: "How to create a content-rich blog using Next.js and Markdown.",
    date: "5/10/2024",
    readTime: "6 min read",
    link: "/blog/nextjs-markdown-blog"
  },
];




  return (

    <section className="py-12 px-4 md:px-8 lg:px-12 xl:px-20">

      <div className="text-center py-5">
        <Heading3 text={'Latest Blogs'}></Heading3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition-shadow bg-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[16px] textRed font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>

            <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <FaClock /> {blog.readTime}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 text-center">
        <Link
          href="/blog"
          className="bgRed px-8 py-2 rounded text-white font-medium"
        >
          View All
        </Link>
      </div>


    </section>
  );
}
