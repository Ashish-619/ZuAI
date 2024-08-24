export default function EvaluationCard() {
  // Dummy evaluation data
  const evaluation = {
    score: 85,
    criteria: {
      A: 90,
      B: 80,
      C: 85,
    },
    date: '2024-08-23',
  }

  return (
    <div className="flex justify-start md:justify-start">
      <img src="animated-image.png" alt="Evaluation Image" className="w-72 h-auto mb-4 hidden md:block md:ml-8"  />
    </div>
  )
}