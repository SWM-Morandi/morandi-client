import { http, HttpResponse } from "msw";

export const handlers = [
  // http.get("/api/lectures", () => {
  //   return HttpResponse.json([
  //     {
  //       id: 4,
  //       title: "김영한 레전드 스프링 강의",
  //       description:
  //         "스프링을 처음 배우시는 누구나 쉽게 공부할 수 있는 강의입니다.",
  //       tutor: "김영한",
  //       thumbnail: {
  //         id: 4,
  //         filename: "thumbnail.jpg",
  //         path: "https://i0.wp.com/blog.codestates.com/wp-content/uploads/2022/11/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC.png?resize=750%2C354&ssl=1",
  //       },
  //     },
  //   ]);
  // }),
];
