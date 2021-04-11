// const fullfillUser = async ({ username = '' }) => {
//   let user = {
//     github,
//     hashnode,
//     devto,
//   };
//   if (!github.login) {
//     let githubUsername = '';
//     if (get(hashnode, 'socialMedia.github')) {
//       githubUsername = cleanGithubUrl(get(hashnode, 'socialMedia.github'));
//     } else if (get(devto, 'github_username')) {
//       githubUsername = get(devto, 'github_username');
//     }
//     user.github.login = githubUsername;
//   }
//   if (get(user, 'github.login')) {
//     if (
//       get(hashnode, 'socialMedia.github') !== get(user, 'github.login') &&
//       !isEmpty(get(hashnode, 'socialMedia.github'))
//     ) {
//       user.github.login = cleanGithubUrl(get(hashnode, 'socialMedia.github'));
//     }
//     const githubUserRes = await fetch(`${GITHUB_USER_URL}${user.github.login}`);
//     const githubUserData = await githubUserRes.json();
//     const githubReadmeData = await fetchUserReadme(user.github.login);
//     const githubReposData = await getReposData(user.github.login);
//     const githubLimited = await getIsGithubRateLimited();
//     user.github = cleanAttrs(githubUserData);
//     user.github.limited = githubLimited;
//     user.github.readme = githubReadmeData;
//     user.github.repos = githubReposData;
//   }

//   user = applyValidations(user);

//   const userBioArray = [
//     get(user, 'devto.summary'),
//     get(user, 'github.bio'),
//     get(user, 'hashnode.tagline'),
//   ];

//   const userData = await getDevcoverUser(username, user, userBioArray);
//   return userData;
// };

// export const buildUser = async (params: { username: string; isPreview: boolean }) => {
//   // const apolloClient = initializeApollo();
//   let user = {};
//   const { username, isPreview = false } = params;

//   if (isPreview) {
//     user = await getDevcoverUser(username, {}, [], true);
//     return user;
//   }

//   const githubUserResponse = await fetch(`${GITHUB_USER_URL}${username}`);
//   const githubUserRes = await githubUserResponse.json();
//   const devtoUserResponse = await fetch(`${DEVTO_USER_URL}${username}`);
//   const devtoUserRes = await devtoUserResponse.json();
//   const { data: hnUserData } = await apolloClient.query({
//     query: GET_USER_BY_USERNAME,
//     variables: {
//       username,
//     },
//   });
//   const githubUser = cleanAttrs(githubUserRes);
//   const hashnodeUser = cleanAttrs(hnUserData.user);
//   const devtoUser = cleanAttrs(devtoUserRes);
//   user = await fullfillUser({
//     username,
//     github: githubUser,
//     hashnode: hashnodeUser,
//     devto: devtoUser,
//   });
//   return user;
// };

// export {
//   buildUser,
// }
