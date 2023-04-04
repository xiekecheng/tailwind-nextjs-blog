import Link from 'next/link'
import formatDate from '@/lib/utils/formatDate'
export default function BlogBox({ post }) {
  // const { slug, date, title, summary, tags, img_url } = post
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img
                src={post.img_url}
                alt=""
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {formatDate(post.date)}
                </time>
                <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.tags[0]}
                </a>
              </div>
              <div className="group relative mb-6 max-w-xl">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600  dark:text-gray-400">
                  <a>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{post.summary}</p>
              </div>
              <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                <Link
                  href={`/blog/${post.slug}`}
                  // className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Read "${post.title}"`}
                >
                  查看更多 &rarr;
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
