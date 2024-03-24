export interface TodayProblemResponse {
  problemId: number;
  bojProblemId: number;
  difficulty: string;
  submitNumber: number;
  correctNumber: number;
}

export interface TodayProblemRankingResponse {
  rank: number;
  nickname: string;
  problemSolvedInfo: {
    problemId: number;
    isCorrect: boolean;
    solvedTime: string;
  }[];
  correctAllNumber: number;
  solvedAllTime: number;
}
