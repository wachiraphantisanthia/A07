import Image from "next/image";

const venues: Record<string, { name: string; image: string }> = {
  "001": {
    name: "The Bloom Pavilion",
    image: "/bloom.jpg"
  },
  "002": {
    name: "Spark Space",
    image: "/sparkspace.jpg"
  },
  "003": {
    name: "The Grand Table",
    image: "/grandtable.jpg"
  }
};

export default async function VenueDetail({ params }: { params: Promise<{ vid: string }> }) {

  const { vid } = await params
  const venue = venues[vid ?? "001"];

  return (
    <main className="flex flex-col items-center p-10">

      <h1 className="text-4xl font-bold mb-6">
        {venue?.name || "Venue"}
      </h1>

      <div className="relative w-[600px] h-[400px]">
        <Image
          src={venue?.image || "/logo.png"}
          alt={venue?.name || "venue"}
          fill
          className="object-cover rounded-lg"
        />
      </div>

    </main>
  );
}