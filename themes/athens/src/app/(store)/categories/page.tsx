import { sdk } from "@/lib/sdk-config";
import Image from "next/image";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await sdk.store.categories.searchCategories({
    page: 0,
    size: 10,
  });

  return (
    <div className="container min-h-screen py-8">
      <div>
        <h2 className="text-center text-xl font-medium uppercase sm:text-left">
          Categories
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {categories.response.map((category, index: number) => (
          <Link
            key={category.slug}
            href={{
              pathname: `/categories/${category.slug}`,
              query: { name: category.name },
            }}
            className="group flex flex-col gap-2"
            prefetch
          >
            <div className="h-44 sm:h-64 border group-hover:border-brand-600 transition-colors rounded-md border-stone-200 bg-stone-50/80 overflow-clip">
              <Image
                priority={index <= 8 ? true : false}
                src={category.media?.media_public_url || "/img/placeholder.png"}
                alt={category.name}
                quality={50}
                width={320}
                height={320}
                className="size-full object-cover"
              />
            </div>
            <h2 className="mt-1 text-center sm:text-left">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
