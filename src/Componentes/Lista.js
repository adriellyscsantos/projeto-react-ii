import { useState, useEffect } from "react";
import Title from "./Title";

const Repos = () => {
  const [repositories, setRepositories] = useState([]);
  const [filterRepos, setFilterRepos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.github.com/users/adriellyscsantos/repos"
      );
      const data = await response.json();

      setRepositories(data);
    }
    getData();
  }, []);

  useEffect(() => {
    setFilterRepos(
      repositories.filter((repo) => {
        return repo.name.includes(search);
      })
    );
  }, [search, repositories]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type a repository"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Title texto="My Github Repositories" />
      <ul>
        {filterRepos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Repos;
