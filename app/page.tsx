import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const activities = [
    { id: 1, name: "Activity 1" },
    { id: 2, name: "Activity 2" },
    { id: 3, name: "Activity 3" },
    { id: 4, name: "Activity 4" },
    { id: 5, name: "Activity 5" },
    { id: 6, name: "Activity 6" },
    { id: 7, name: "Activity 7" },
  ];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </header>

      <main className="row-start-2 flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold text-center">
          Choose An Activity
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/act${activity.id}`}
              className="flex items-center justify-center bg-blue-500 text-white font-medium text-lg py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
            >
              {activity.name}
            </Link>
          ))}
        </div>
      </main>

      <footer className="row-start-3 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} My Next.js App. All rights reserved.
      </footer>
    </div>
  );
}
