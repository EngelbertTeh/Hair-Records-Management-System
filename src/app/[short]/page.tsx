import { RedirectType, notFound, redirect } from 'next/navigation';
import { getShortLinkRecord } from '../lib/db';

export default async function ShortPage({
  params,
}: {
  params: { short: string };
}) {
  const { short } = params;
  const [record] = await getShortLinkRecord(short);
  const { url } = record;
  if (!short || !record || !url) notFound();
  redirect(url, RedirectType.push);
}
