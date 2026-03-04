export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose topics',
      description: 'Select your interests and follow writers you love.',
    },
    {
      number: '2',
      title: 'Read daily',
      description: 'Get a personalized feed of the best posts for you.',
    },
    {
      number: '3',
      title: 'Build your library',
      description:
        'Save articles and build your personal knowledge base.',
    },
  ];

  return (
    <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#111111] text-center mb-16">
        How it works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#111111] flex items-center justify-center text-[#111111] font-bold text-lg">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-[#111111]">
              {step.title}
            </h3>
            <p className="text-[#6B6B6B] max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}