import Navbar from '@/components/component/Navbar';
import SearchBar from '@/components/component/SearchBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export default function CustomerList() {
  return (
    <div className="card-container parent gr3">
      <div className="card-container fc row-span-1">
        <Navbar>RIMIX</Navbar>
        <Card className="panel fc flex-auto ">
          <CardHeader>
            <CardTitle className="header ">CUSTOMERS</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <SearchBar className="searchbar" />
          </CardContent>
        </Card>
      </div>
      <div className="card-container ">
        <Card className="panel min-h-full">Somebody</Card>
      </div>
    </div>
  );
}
