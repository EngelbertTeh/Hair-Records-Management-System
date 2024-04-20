'use client';

import { FormEvent, useState } from 'react';

export default function LinksCreateForm() {
  const [results, setResults] = useState<JSON | undefined>(undefined);
  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    const endpoint = 'api/links/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    console.log(response);

    const result: JSON = await response.json();

    setResults(result);
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
