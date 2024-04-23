'use client';

import { FormEvent, useState } from 'react';
import { useSWRConfig } from 'swr';

export default function LinksCreateForm() {
  const { mutate } = useSWRConfig(); // mutate is a function that can be used to trigger a revalidation of the data, in this case, the links data gets revalidated whenever a new link is added
  const [results, setResults] = useState<JSON | undefined>(undefined);
  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const JSONdata = JSON.stringify(data);
    const endpoint = 'api/links/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result: JSON = await response.json();

    setResults(result);
    mutate('api/links');
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" name="url" placeholder="Key in something here" />
        <button type="submit">Submit</button>
      </form>
      {results && JSON.stringify(results)}
    </>
  );
}
