import { RecommendationsClient } from "@/components/recommendations-client";
import { Bot } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-primary/20 rounded-full">
            <Bot className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-headline font-bold">Flavor Recommendation Engine</h1>
        <p className="text-lg text-muted-foreground">
          Let our AI expert find the perfect new flavors for you based on your tastes.
        </p>
      </div>
      <RecommendationsClient />
    </div>
  );
}
