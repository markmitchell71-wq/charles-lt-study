/*
  Study content for Charles. Every card and question cites its source and page.
  Add items here; the app picks them up on reload.

  card:     { id, deck, front, back, src }
  question: { id, deck, q, choices: [..4], answer: index, why, src }
*/
window.STUDY = {
  title: "FLFR Lieutenant Exam",
  updated: "2026-11-01",
  sources: [
    { id: "sample", name: "Sample content (how the app works)", version: "", effective: "" }
  ],
  decks: [
    { id: "start", name: "Getting started" }
  ],
  cards: [
    { id: "s1", deck: "start", front: "What does 'Again' do?", back: "Shows the card again in this session and resets it to a 1-day gap.", src: "sample" },
    { id: "s2", deck: "start", front: "What does 'Good' do?", back: "Pushes the card further out: 1 day, 3 days, 1 week, 2 weeks, 1 month.", src: "sample" },
    { id: "s3", deck: "start", front: "Where do missed quiz questions go?", back: "To Weak areas, grouped by topic, so you can drill them again.", src: "sample" }
  ],
  questions: [
    { id: "q1", deck: "start", q: "Which study method should you do first in a session?",
      choices: ["Reread the chapter", "Highlight key lines", "Quiz yourself", "Copy notes"],
      answer: 2, why: "Pulling a fact from memory makes it stick better than rereading.", src: "sample" }
  ]
};
