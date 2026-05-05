# Exercises for AI

AI-generated solutions to [*Exercises for Programmers*](https://pragprog.com/titles/bhwb/exercises-for-programmers/) by Brian P. Hogan, built as an interactive Next.js web app.

![Exercises for Programmers](https://pragprog.com/titles/bhwb/exercises-for-programmers/bhwb.jpg)

## About

Each of the book's 57 exercises is implemented as a live, interactive page. Solutions were generated with AI assistance. The app covers chapters 2–10:

| Chapter | Topic | Exercises |
|---|---|---|
| 02 | Input, Processing & Output | 1–6 |
| 03 | Calculations | 7–13 |
| 04 | Making Decisions | 14–23 |
| 05 | Functions | 24–27 |
| 06 | Repetition | 28–32 |
| 07 | Data Structures | 33–40 |
| 08 | Working with Files | 41–46 |
| 09 | Working with External Services | 47–52 |
| 10 | Full Programs | 53–57 |

## Tech Stack

Next.js 16 · React 19 · TypeScript · Semantic UI React · styled-components

## Running Locally

```bash
pnpm install
pnpm dev
```

Exercises 48 (weather) and 50 (movie recommendations) require API keys. Create a `.env.local`:

```
OPENWEATHERMAP_API_KEY=your_key_here
OMDB_API_KEY=your_key_here
```

Free keys: [openweathermap.org](https://openweathermap.org/api) · [omdbapi.com](https://www.omdbapi.com/)
