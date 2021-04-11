// TODO: Make this one mature enough, then we can use this as a template for other service like LinkedIn/Hashnode/Dev.to

// At least this one should contain all helpers for its platform, and export only the default one.
// e.g. 
// const getData = (username: string) => ...
//
// export default (username: string) => {
//      ... do sth magic
//    return getData(username);
// };
import { orderBy } from 'lodash';
import { GITHUB_API_URL, GITHUB_README_URL, GITHUB_USER_URL, } from '../constants';

const makeReadmeURL = (username: string, branch = 'main', fileName = 'README.md') => {
  return `${GITHUB_README_URL}${username}/${username}/${branch}/${fileName}`;
};


const fetchUserReadme = async (username: string) => {
  const branches = ['main', 'master'];
  const names = ['README.md', 'Readme.md', 'readme.md'];
  let readmeFound = false;
  let githubReadmeData = null;
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const branch of branches) {
      // eslint-disable-next-line no-restricted-syntax
      for (const fileName of names) {
        if (!readmeFound) {
          // eslint-disable-next-line no-await-in-loop
          const response = await fetch(makeReadmeURL(username, branch, fileName));
          // FIXME: eslint-disable-next-line no-await-in-loop
          githubReadmeData = await response.text();
          readmeFound = !githubReadmeData.includes('404');
        }
      }
    }
    return githubReadmeData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getReposData = async (username: string) => {
  try {
    const response = await fetch(`${GITHUB_USER_URL}${username}/repos?per_page=100`);
    if (response.status === 404 || response.status === 403) {
      return [];
    }
    const repos = await response.json();
    const orderedRepos = orderBy(repos, ['stargazers_count'], ['desc']);
    return orderedRepos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getRateLimited = async (showLimit = false) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/rate_limit`);
    const limit = await response.json();
    if (showLimit) {
      return limit;
    }
    if (limit.resources.core.remaining < 1) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const getData = async (username: string, showLimit = false) => {
  const response = await fetch(`${GITHUB_USER_URL}${username}`);
  const data = await response.json();

  const limit = await getRateLimited(showLimit);
  const readme = await fetchUserReadme(username);
  const repos = await getReposData(username);

  // Inject useful data into this object before return it out
  return {
    ...data,
    limit,
    readme,
    repos,
  };
};

export default getData;
