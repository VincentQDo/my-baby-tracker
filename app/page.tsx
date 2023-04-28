import FeedingCard from "@/components/feeding-card";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl my-8">Baby Behavior Tracker</h1>
      <FeedingCard />
    </div>
  );
}
