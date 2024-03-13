import Banner from "@/app/contents/today-problem/_component/Banner";
import TodayProblemList from "@/app/contents/today-problem/_component/TodayProblemList";
import RankingList from "@/app/contents/today-problem/_component/RankingList";

export default function TodayProblem() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[80rem]">
      <Banner />
      <TodayProblemList />
      <RankingList />
    </div>
  );
}
