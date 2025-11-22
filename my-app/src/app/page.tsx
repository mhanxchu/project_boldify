"use client";

import { Hero } from "@/components/magicui/hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    // TODO: Add backend integration
    console.log("Sign up:", email);
    alert("Thank you for your interest! We'll notify you when we launch.");
    e.currentTarget.reset();
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <Hero
          title="Speak with Confidence in Every Interview"
          description="Turn interview anxiety into confident, clear communication. Practice realistic interview scenarios with an AI coach that understands your goals and gives you tailored feedback."
          badge="Coming Soon"
          className="border-0 bg-transparent p-0"
        />
      </section>

      {/* Problem & Audience Section */}
      <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <Badge variant="secondary" className="mb-4 w-fit">
                The Challenge
              </Badge>
              <CardTitle asChild>
                <h2 id="problem-heading" className="text-2xl md:text-3xl">
                  Interview Anxiety Holds You Back
                </h2>
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                Many people feel anxious during interviews and important conversations because they struggle to express themselves clearly and confidently.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our focus is on <strong className="text-foreground">job seekers</strong> and <strong className="text-foreground">early-career professionals</strong> who need to make a strong impression but often feel unsure or overwhelmed.
                </p>
                <Separator />
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Job Seekers</Badge>
                  <Badge variant="outline">Early-Career Professionals</Badge>
                  <Badge variant="outline">Interview Preparation</Badge>
                  <Badge variant="outline">Communication Skills</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="solution-heading">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <Badge variant="secondary" className="mb-4 w-fit">
                How We Help
              </Badge>
              <CardTitle asChild>
                <h2 id="solution-heading" className="text-2xl md:text-3xl">
                  Your Personal Communication Coach
                </h2>
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                A supportive AI-powered platform that helps you build confidence and improve your communication skills through personalized practice and feedback.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Understands You</h3>
                    <p className="text-sm text-muted-foreground">
                      Recognizes your emotional state and adapts to your needs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Real Practice</h3>
                    <p className="text-sm text-muted-foreground">
                      Simulates real-life situations like job interviews and professional conversations.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Tailored Feedback</h3>
                    <p className="text-sm text-muted-foreground">
                      Provides personalized guidance to help you improve and build confidence.
                    </p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground">
                  Specifically designed for high-stakes situations like job interviews and professional conversations, helping you make the strong impression you deserve.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle asChild>
                <h2 id="cta-heading" className="text-2xl md:text-3xl">
                  Be the First to Know
                </h2>
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                Join our waitlist and get notified when we launch. Start building your communication confidence today.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    aria-label="Email address"
                    className="w-full"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Join Waitlist
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
