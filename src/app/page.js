import Image from 'next/image'
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log({ allBlogs }, 'hiiiii');
  return (
    <main className="flex flex-col items-center justify-center">
      Hello world
    </main>
  )
}
