import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

interface Review {
  id: string;
  name: string;
  email: string;
  rating: "i-recommend" | "i-do-not-recommend" | "neutral" | "no-opinion";
  comment: string;
  createdAt: string;
  isNew?: boolean;
}

const ratingConfig = {
  "i-recommend": {
    label: "I Recommend",
    icon: ThumbsUp,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  "i-do-not-recommend": {
    label: "I Do Not Recommend",
    icon: ThumbsDown,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  neutral: {
    label: "Neutral",
    icon: Star,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  "no-opinion": {
    label: "No Opinion",
    icon: Star,
    color: "text-gray-400",
    bgColor: "bg-gray-400/10",
  },
};

export default function Reviews() {
  useScrollAnimation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/reviews");
      if (res.ok) {
        const data = await res.json();
        setReviews(data.reviews || []);
        const fetchedReviews = data.reviews || [];

        // Sort reviews by date, newest first
        fetchedReviews.sort((a: Review, b: Review) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        // If there are existing reviews, mark the new one
        if (reviews.length > 0 && fetchedReviews.length > reviews.length) {
          fetchedReviews[0].isNew = true;
        }
        setReviews(fetchedReviews);
      }
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    // Listen for review submission events to refresh the reviews list
    const handleReviewSubmitted = () => {
      console.log("Review submitted event received, refreshing reviews...");
      fetchReviews();
    };

    window.addEventListener("reviewSubmitted", handleReviewSubmitted);
    return () => window.removeEventListener("reviewSubmitted", handleReviewSubmitted);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-sm text-accent uppercase tracking-widest mb-4">
            Community Feedback
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">
            Reviews
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {reviews.length === 0
              ? "No reviews yet. Be the first to share your thoughts!"
              : `${reviews.length} review${reviews.length !== 1 ? "s" : ""} from our community`}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No reviews yet. Be the first to share your feedback!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => {
              const config = ratingConfig[review.rating];
              const Icon = config.icon;
              return (
                <div
                  key={review.id}
                  className={`glass rounded-xl p-6 fade-in hover:bg-white/[0.08] transition-all duration-300 ${
                    review.isNew ? 'animate-highlight' : ''
                  }`}
                  data-testid={`review-card-${review.id}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-lg text-white" data-testid={`review-name-${review.id}`}>
                        {review.name}
                      </h4>
                      <p className="text-sm text-white/80" data-testid={`review-email-${review.id}`}>
                        {review.email}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg ${config.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.color}`}>
                      {config.label}
                    </span>
                  </div>

                  <p className="text-white/90 mt-4" data-testid={`review-comment-${review.id}`}>
                    {review.comment}
                  </p>

                  <p className="text-xs text-white/70 mt-4">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
