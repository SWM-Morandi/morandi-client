import Banner from "@/app/contents/today-problem/_component/Banner";
import TodayProblemList from "@/app/contents/today-problem/_component/TodayProblemList";
import RankingList from "@/app/contents/today-problem/_component/RankingList";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import {
  getTodayProblems,
  getTodayProblemsRanking,
} from "@/app/contents/today-problem/_apis/getTodayProblems";

export default async function TodayProblem() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["today-problems"],
    queryFn: getTodayProblems,
  });
  await queryClient.prefetchQuery({
    queryKey: ["today-problems", "ranking"],
    queryFn: getTodayProblemsRanking,
  });
  const dehydratedState = dehydrate(queryClient);

  queryClient.getQueryData(["today-problems"]);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="flex flex-col justify-center items-center w-full max-w-[80rem]">
        <Banner />
        <TodayProblemList />
        <RankingList />
      </div>
    </HydrationBoundary>
  );
}
