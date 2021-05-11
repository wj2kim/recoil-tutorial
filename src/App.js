import { useEffect } from 'react';
import { atom, useRecoilState } from "recoil";

const reposState = atom({
  key: "repos",
  default: [],
})

function App() {
  const [repos, setRepos] = useRecoilState(reposState);

  useEffect(() => {
    const getRepos = async() => {
      const url = "https://ghapi.huchen.dev/repositories?since=monthly";
      const response = await fetch(url);
      const body = await response.json();
      console.log(body);
    };

    getRepos();
  }, []);

  return <div></div>;
}

export default App;
