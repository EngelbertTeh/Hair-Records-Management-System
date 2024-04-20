'use client';

import useSWR from 'swr';

const fetcher = async (url: string): Promise<{ name: string }> => {
  const response = await fetch(url, { next: { tags: ['posts'] } });
  return response.json();
};

export default function GithubProfile() {
  const myGitHubRepoProfile = `https://api.github.com/repos/EngelbertTeh/portfolio-project-3--nextjs`;
  const { data, error, isLoading } = useSWR(myGitHubRepoProfile, fetcher);

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  );
}