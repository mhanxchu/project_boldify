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
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <Hero
          title="Speak with Confidence in Every Interview"
          description="Turn interview anxiety into confident, clear communication. Practice realistic interview scenarios with an AI coach that understands your goals and gives you tailored feedback."
          badge="Coming Soon"
          className="border-0 bg-transparent p-0"
        />
      </section>

      {/* Problem & Audience Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-4xl">
          <Card className="border border-border/50 shadow-sm">
            <CardHeader className="space-y-6 pb-8">
              <Badge variant="secondary" className="mb-2 w-fit border-gold/30 text-gold-dark font-serif-body tracking-wider uppercase text-xs px-4 py-1.5">
                The Challenge
              </Badge>
              <CardTitle asChild>
                <h2 id="problem-heading" className="font-serif-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Interview Anxiety Holds You Back
                </h2>
              </CardTitle>
              <CardDescription className="font-serif-body text-lg md:text-xl leading-relaxed text-muted-foreground">
                Many people feel anxious during interviews and important conversations because they struggle to express themselves clearly and confidently.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-8">
                <p className="font-serif-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our focus is on <strong className="text-foreground font-semibold">job seekers</strong> and <strong className="text-foreground font-semibold">early-career professionals</strong> who need to make a strong impression but often feel unsure or overwhelmed.
                </p>
                <Separator className="bg-border/50" />
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="border-gold/30 text-gold-dark font-serif-body px-4 py-1.5">Job Seekers</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold-dark font-serif-body px-4 py-1.5">Early-Career Professionals</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold-dark font-serif-body px-4 py-1.5">Interview Preparation</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold-dark font-serif-body px-4 py-1.5">Communication Skills</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32" aria-labelledby="solution-heading">
        <div className="mx-auto max-w-4xl">
          <Card className="border border-border/50 shadow-sm">
            <CardHeader className="space-y-6 pb-8">
              <Badge variant="secondary" className="mb-2 w-fit border-gold/30 text-gold-dark font-serif-body tracking-wider uppercase text-xs px-4 py-1.5">
                How We Help
              </Badge>
              <CardTitle asChild>
                <h2 id="solution-heading" className="font-serif-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Your Personal Communication Coach
                </h2>
              </CardTitle>
              <CardDescription className="font-serif-body text-lg md:text-xl leading-relaxed text-muted-foreground">
                A supportive AI-powered platform that helps you build confidence and improve your communication skills through personalized practice and feedback.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-10">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="space-y-3">
                    <h3 className="font-serif-heading font-semibold text-xl">Understands You</h3>
                    <p className="font-serif-body text-sm md:text-base text-muted-foreground leading-relaxed">
                      Recognizes your emotional state and adapts to your needs.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif-heading font-semibold text-xl">Real Practice</h3>
                    <p className="font-serif-body text-sm md:text-base text-muted-foreground leading-relaxed">
                      Simulates real-life situations like job interviews and professional conversations.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif-heading font-semibold text-xl">Tailored Feedback</h3>
                    <p className="font-serif-body text-sm md:text-base text-muted-foreground leading-relaxed">
                      Provides personalized guidance to help you improve and build confidence.
                    </p>
                  </div>
                </div>
                <Separator className="bg-border/50" />
                <p className="font-serif-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  Specifically designed for high-stakes situations like job interviews and professional conversations, helping you make the strong impression you deserve.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-2xl">
          <Card className="border border-border/50 shadow-sm">
            <CardHeader className="text-center space-y-6 pb-8">
              <CardTitle asChild>
                <h2 id="cta-heading" className="font-serif-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Be the First to Know
                </h2>
              </CardTitle>
              <CardDescription className="font-serif-body text-lg md:text-xl leading-relaxed text-muted-foreground">
                Join our waitlist and get notified when we launch. Start building your communication confidence today.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSignUp} className="space-y-6">
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
                    className="w-full font-serif-body border-border/50 focus-visible:ring-gold focus-visible:border-gold/50 h-12 text-base"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full font-serif-body border border-gold/40 bg-gold/10 hover:bg-gold/20 text-foreground shadow-sm transition-all duration-300 py-6 text-base tracking-wide"
                >
                  Join Waitlist
                </Button>
                <p className="text-center text-xs text-muted-foreground font-serif-body">
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
