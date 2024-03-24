import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/contents/today-problems", () => {
    return HttpResponse.json([
      {
        problemId: 1,
        bojProblemId: 1000,
        difficulty: "초급",
        submitNumber: 40,
        correctNumber: 20,
      },
      {
        problemId: 2,
        bojProblemId: 1001,
        difficulty: "중급",
        submitNumber: 30,
        correctNumber: 12,
      },
      {
        problemId: 3,
        bojProblemId: 1002,
        difficulty: "중급",
        submitNumber: 32,
        correctNumber: 13,
      },
      {
        problemId: 4,
        bojProblemId: 1003,
        difficulty: "상급",
        submitNumber: 20,
        correctNumber: 4,
      },
    ]);
  }),
  http.get("/contents/today-problems/ranking", () => {
    return HttpResponse.json([
      {
        rank: 1,
        nickname: "HELLO",
        problemSolvedInfo: [
          { problemId: 1, isCorrect: true, solvedTime: "00:03" },
          { problemId: 2, isCorrect: true, solvedTime: "00:23" },
          { problemId: 3, isCorrect: true, solvedTime: "01:00" },
          { problemId: 4, isCorrect: true, solvedTime: "01:23" },
        ],
        correctAllNumber: 4,
        solvedAllTime: 184,
      },
      {
        rank: 2,
        nickname: "YEOBI",
        problemSolvedInfo: [
          { problemId: 1, isCorrect: true, solvedTime: "00:03" },
          { problemId: 2, isCorrect: true, solvedTime: "00:23" },
          { problemId: 3, isCorrect: true, solvedTime: "01:00" },
          { problemId: 4, isCorrect: true, solvedTime: "01:23" },
        ],
        correctAllNumber: 4,
        solvedAllTime: 184,
      },
      {
        rank: 3,
        nickname: "TAEYANG",
        problemSolvedInfo: [
          { problemId: 1, isCorrect: true, solvedTime: "00:03" },
          { problemId: 2, isCorrect: true, solvedTime: "00:23" },
          { problemId: 3, isCorrect: true, solvedTime: "01:00" },
          { problemId: 4, isCorrect: true, solvedTime: "01:23" },
        ],
        correctAllNumber: 4,
        solvedAllTime: 184,
      },
      {
        rank: 4,
        nickname: "NAXI",
        problemSolvedInfo: [
          { problemId: 1, isCorrect: true, solvedTime: "00:03" },
          { problemId: 2, isCorrect: true, solvedTime: "00:23" },
          { problemId: 3, isCorrect: true, solvedTime: "01:00" },
          { problemId: 4, isCorrect: true, solvedTime: "01:23" },
        ],
        correctAllNumber: 4,
        solvedAllTime: 184,
      },
      {
        rank: 5,
        nickname: "GOGO",
        problemSolvedInfo: [
          { problemId: 1, isCorrect: true, solvedTime: "00:03" },
          { problemId: 2, isCorrect: true, solvedTime: "00:23" },
          { problemId: 3, isCorrect: true, solvedTime: "01:00" },
          { problemId: 4, isCorrect: true, solvedTime: "01:23" },
        ],
        correctAllNumber: 4,
        solvedAllTime: 184,
      },
    ]);
  }),
];
