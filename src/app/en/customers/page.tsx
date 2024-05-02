import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { syncopateBold } from '@/lib/fonts';
import { Fragment } from 'react';

export default function CustomerList() {
  return (
    <Fragment>
      <Card className="card">
        <CardHeader>
          <CardTitle className={`${syncopateBold.className}`}>
            RIMIXabcde
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="card">
        <CardHeader>
          <CardTitle className="header">CUSTOMERS</CardTitle>
          <CardDescription>Searchbar</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </Fragment>
  );
}
