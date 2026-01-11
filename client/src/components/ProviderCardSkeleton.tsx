import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProviderCardSkeleton() {
  return (
    <Card className="overflow-visible">
      <CardContent className="p-6">
        {/* Header skeleton */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <Skeleton className="w-12 h-12 rounded-md" />
            <div>
              <Skeleton className="h-5 w-32 mb-1" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <Skeleton className="h-5 w-16" />
        </div>

        {/* Service badges skeleton */}
        <div className="flex gap-1.5 mb-4">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* Price skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <Skeleton className="h-4 w-16 mb-1" />
            <Skeleton className="h-7 w-24" />
          </div>
          <Skeleton className="h-5 w-28" />
        </div>

        {/* Features skeleton */}
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Insurance skeleton */}
        <Skeleton className="h-4 w-40" />
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Skeleton className="h-9 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
}
