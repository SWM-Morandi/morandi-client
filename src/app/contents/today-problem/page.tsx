import Banner from "@/app/contents/today-problem/_component/Banner";
import TodayProblemList from "@/app/contents/today-problem/_component/TodayProblemList";

export default function TodayProblem() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[80rem]">
      <Banner />
      <TodayProblemList />
    </div>
  );
}
