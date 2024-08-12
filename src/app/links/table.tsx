'use client';
//test
import { Link } from '@/lib/types';
import useSWR from 'swr';
import LinksCreateForm from './createForm';

const fetcher = async (url: string): Promise<Link[]> => {
  const response = await fetch(url);
  return response.json();
};
//TODO: Change snake case properties to camel
export default function LinksHTMLTable() {
  const linksAPI = `api/links`;
  const { data, error, isLoading } = useSWR(linksAPI, fetcher, {
    revalidateOnFocus: false,
  });
  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';
  return (
    <>
      <LinksCreateForm />
      <div>
        <table>
          <tbody>
            {data?.map((link, idx) => {
              return (
                <tr key={`link-item-${link.id}-${idx}`}>
                  <td>{link.id}</td>
                  <td>{link.url}</td>
                  <td>{link.short}</td>
                  <td>{link.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
