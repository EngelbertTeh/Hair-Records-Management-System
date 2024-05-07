import Navbar from '@/components/component/Navbar';
import SearchBar from '@/components/component/SearchBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export default function CustomerList() {
  return (
    <div className="container gr3">
      <div className="header fc sticky top-0 row-span-1 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md">
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
      <div className="card-container h-[500px] bg ">
        <Card className="panel min-h-full flex flex-col justify-end">
          Somebody Somebody Somebody Somebody Somebody Somebody Somebody
          Somebody Somebody Somebody Somebody Somebody Somebody Somebody
          Somebody Somebody Somebody Somebody Somebody Somebody Somebody
          Somebody Somebody Somebody Somebody Somebody Somebody Somebody
          Somebody Somebody Somebody Somebody Somebody Somebody Somebody
          Somebody Somebody Somebody Somebody Somebody Somebody Somebody
          Somebody Somebody Somebody Somebody
        </Card>
      </div>

      <div className="footer h-[150px] bg-white  w-full fixed bottom-0  backdrop-filter backdrop-blur-sm">
        <div className="gradient-blur absolute bottom-[100%]"></div>
      </div>
    </div>
  );
}
