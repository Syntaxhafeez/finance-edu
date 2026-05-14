export function scoreReadability(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length || 1;
  const averageWords = words / sentences;
  return Math.max(0, Math.min(100, Math.round(100 - Math.max(0, averageWords - 14) * 4)));
}

export function scoreAiRepetition(text: string) {
  const phrases = text.toLowerCase().match(/\b\w+\s+\w+\s+\w+\b/g) ?? [];
  const unique = new Set(phrases);
  return phrases.length === 0 ? 0 : Math.round((1 - unique.size / phrases.length) * 100);
}

export function plagiarismRiskPlaceholder(text: string) {
  const hasCitations = /https?:\/\//.test(text);
  const veryShort = text.trim().split(/\s+/).length < 700;
  return hasCitations && !veryShort ? 15 : 45;
}

export function qualityGuidance(text: string) {
  const readability = scoreReadability(text);
  const repetition = scoreAiRepetition(text);
  const plagiarismRisk = plagiarismRiskPlaceholder(text);
  return {
    readability,
    repetition,
    plagiarismRisk,
    recommendations: [
      readability < 70 ? "Shorten long sentences and add clearer subheadings." : "Readability is in a good range.",
      repetition > 18 ? "Vary phrasing and remove repeated three-word phrases." : "Repetition risk is acceptable.",
      plagiarismRisk > 30 ? "Add original examples, tables, citations, and expert notes." : "Originality signals look stronger."
    ]
  };
}
