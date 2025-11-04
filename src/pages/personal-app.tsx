import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PersonalAppPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-16 px-4 max-w-3xl">
      <Button variant="outline" className="mb-6" onClick={() => navigate(-1)}>
        ← Back
      </Button>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Happiness & Rightness: A Simple Science for a Joyful Life
      </h1>
      <p className="mb-4 text-base md:text-lg text-blue-900 font-medium">
        <b>True happiness is not something to chase or wait for—it's what remains when life is aligned with what’s right.</b>
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-3">🌱 The Universal Wish For Happiness</h2>
      <p className="mb-4">
        Every person, everywhere, wants to be happy. This longing is universal—beneath every decision, every effort, and every goal. We study, work, rest, and build relationships because we believe they’ll bring happiness. Sometimes they do, but often the feeling is fleeting. Why does happiness fade, even when we get what we want?
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">🔎 An Everyday Law</h2>
      <p className="mb-4">
        Look closely: whenever you do what's right—even something small—happiness appears instantly. When you help, speak truth, or keep a promise, there’s an inner ease that no reward can match. But let even one thing go wrong, and happiness seems to vanish. **Rightness and happiness move together like shadow and light.**
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">🚫 Why Chasing Pleasure Fails</h2>
      <p className="mb-4">
        Most people seek to repeat old pleasures—food, praise, rest, or success—hoping happiness will return. But this search becomes a loop; nothing outside can deliver lasting contentment, and more of "what once felt nice" brings only diminishing returns.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">💡 The Transformative Question</h2>
      <p className="mb-4">
        Instead of “What will make me happy?”, ask “What is the right thing to do now?” This one shift lifts the mind and brings out patience, honesty, effort, and service. **While doing the right thing, a deeper happiness flows—quiet, constant, and strong, even in difficulty.**
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">🎓 Training the Mind for Rightness</h2>
      <p className="mb-4">
        Following what's right is simpler than chasing pleasure. Children learn it naturally—wash, study, share, speak kindly. Adults can retrain the same way: notice what's right, then do it. The mind begins to enjoy what's right, and even through discomfort, the heart feels light.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-2">🌼 The Promise: Happiness As Your Companion</h2>
      <p className="mb-4">
        This guide doesn't ask you to suppress happiness; it shows you how to root it in daily life. <b>Happiness isn’t a prize at the finish line—it’s the fragrance of living rightly, available all along the journey.</b>
      </p>

      <blockquote className="italic border-l-4 border-blue-400 pl-4 py-2 bg-blue-50/50 mb-6 text-blue-800 text-lg">
        “When you learn to follow what's right, happiness doesn’t wait at the finish—it walks beside you every step.”
      </blockquote>

      <div className="mt-10 flex flex-col items-center gap-4">
        <Button variant="outline" onClick={() => navigate(-1)}>
          ← Back to Home
        </Button>
      </div>
    </div>
  );
};

export default PersonalAppPage;
