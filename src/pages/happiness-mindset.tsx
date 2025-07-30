import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HappinessMindsetPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-16 px-4 max-w-2xl">
      <Button variant="outline" className="mb-6" onClick={() => navigate(-1)}>
        ← Back
      </Button>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
        Happiness Is a Mindset
      </h1>
      <p className="mb-4">
        The Endless Search and the Truth We Overlook from the people live in skyscrapers, from sages in solitude to CEOs in glass towers — every human being is in search of the same thing: happiness.
      </p>
      <p className="mb-4">
        We may give it different names — peace, satisfaction, contentment, success, fulfilment, bliss — but at the heart of every goal, every action, every desire is this:<br/>
        <b>“I want to feel good. I want to be happy.”</b>
      </p>
      <p className="mb-4">
        To satisfy this deep longing, people turn in many directions:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Some seek it through food and indulgence — comforting the body to calm the mind.</li>
        <li>Others chase it through relationships, romance, or pleasure, hoping to be seen, loved, or desired.</li>
        <li>Many pursue it through wealth, status, and recognition — collecting trophies to prove they matter.</li>
        <li>Some escape into entertainment, distraction, or even addiction, numbing their pain temporarily.</li>
        <li>Others search through achievement — believing happiness is a destination they’ll reach after “just one more success.”</li>
      </ul>
      <p className="mb-4">
        And for a while — all these works. Yes, they give joy. Pleasure. Excitement. Even meaning.<br/>
        But there is a problem: They fade. They shift. They end.<br/>
        The meal is over. The success gets old. The praise stops. The movie ends.<br/>
        The mind — once again — returns to restlessness. And so we begin again. The next craving. The next distraction. The next chase.
      </p>
      <hr className="my-6" />
      <h2 className="text-xl font-semibold mb-2">🧠 The Truth We Often Overlook</h2>
      <p className="mb-4">
        Happiness is not wrong. Pleasure is not evil. But what if we’ve misunderstood where true, lasting happiness comes from? Not from what we have. Not from who we’re with.<br/>
        Not from where we are. But from how we think, from how we perceive the situations, from how we relate to ourselves and the world around us.<br/>
        Lasting happiness is not in things. It is in the mindset that meets those things.
      </p>
      <hr className="my-6" />
      <h2 className="text-xl font-semibold mb-2">🧘🏽‍♂️ Why Mindset Is the Master Key</h2>
      <p className="mb-4">
        Your mindset is the inner lens through which you experience life.<br/>
        Two people can go through the same event — a breakup, a job loss, a rainy day — and one may feel destroyed, while the other sees growth, reflection, or even joy.<br/>
        It is not the event that defines our experience — it is the mindset that meets the event.<br/>
        Mindset is what turns a failure into a lesson.<br/>
        Mindset is what allows contentment in simplicity.<br/>
        Mindset is what creates peace even in chaos.<br/>
        Mindset is what turns daily life into a gift.
      </p>
      <p className="mb-8 font-semibold">
        In summary: <br/>
        <span className="italic">"Everything around us may change — but our mindset is ours to shape, train, and carry forever. It’s the one key to happiness that lasts, in every moment, through every season of life."</span>
      </p>
      <Button variant="outline" onClick={() => navigate(-1)}>
        ← Back to Home
      </Button>
    </div>
  );
};

export default HappinessMindsetPage; 