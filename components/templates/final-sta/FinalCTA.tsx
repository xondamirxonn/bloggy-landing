import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <Card className="p-12 border border-[#EAEAEA] rounded-[14px] text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111]">
          Ready to level up your learning?
        </h2>
        <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
          Join thousands of developers building better habits with daily curated content.
        </p>
        <Button className="bg-[#111111] text-white hover:bg-[#333333] h-12 px-8">
          Get started free
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Card>
    </section>
  );
}