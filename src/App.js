import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const reposState = atom({
  key: "repos",
  default: [],
})

function App() {
  const [repos, setRepos] = useRecoilState(reposState);

  useEffect(() => {
    const getRepos = async() => {
      const response = await fetch("https://ghapi.huchen.dev/repositories?since=daily");
      const body = await response.json();
      setRepos(body);
    };

    getRepos();
  }, []);

  return repos.map((repo) => (
    <div key={repo.url}>
      <a href={repo.url}>
        {repo.author} / {repo.name}
      </a>
    </div>
  ));
}

export default App;
