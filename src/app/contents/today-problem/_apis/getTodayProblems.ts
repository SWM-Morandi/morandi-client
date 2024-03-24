export async function getTodayProblems() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/contents/today-problems`,
    {
      next: {
        tags: ["today-problems"],
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getTodayProblemsRanking() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/contents/today-problems/ranking`,
    {
      next: {
        tags: ["today-problems", "ranking"],
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
