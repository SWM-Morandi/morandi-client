"use client";

import Editor, { loader } from "@monaco-editor/react";
import { useState, useEffect } from "react";

import { theme } from "@/app/ide/_component/EditorTheme";

const languages = [
  { value: "cpp", label: "C++" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
];

export default function CustomEditor({}: {}) {
  const [userFontSize, setUserFontSize] = useState(16); // 추후에 폰트 사이즈 조절 기능 추가

  const [userLang, setUserLang] = useState("cpp");
  const [axiosLang, setAxiosLang] = useState("Cpp"); // axios 요청 시 사용할 언어
  const [userCodeTest, setUserCodeTest] = useState<string | undefined>("");

  const options = {
    fontSize: userFontSize,
  };

  /* 커스텀 에디터 적용하기 */
  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme("myTheme", theme);
    });
  }, []);

  return (
    <>
      <select
        className="w-[5rem] ml-[0.5rem] mb-[0.5rem] bg-gray-900"
        onChange={(e) => {
          setUserLang(e.target.value);
          if (e.target.value === "cpp") {
            setAxiosLang("Cpp");
          }
          if (e.target.value === "python") {
            setAxiosLang("Python");
          }
          if (e.target.value === "java") {
            setAxiosLang("Java");
          }
        }}
      >
        {languages.map((lang) => (
          <option value={lang.value} key={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
      <div className="flex flex-col justify-center h-[52vh] w-[100%] bg-[#2E3642] rounded-xl">
        <Editor
          options={options}
          height="50vh"
          width="100%"
          theme="myTheme"
          language={userLang}
          value="#include<stdio.h>"
          onChange={(value) => {
            setUserCodeTest(value);
          }}
        />
      </div>
    </>
  );
}
