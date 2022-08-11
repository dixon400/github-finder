import Web from "../../config";
import axios from "axios";

const GithubUrl = Web.url;
const GithubToken = Web.token;

const github = axios.create({
  baseURL: GithubUrl,
  headers: { Authorization: `token ${GithubToken}` },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
