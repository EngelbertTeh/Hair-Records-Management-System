import Navbar from '@/components/component/Navbar';
import SearchBar from '@/components/component/SearchBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export default function CustomerList() {
  return (
    <div className="page">
      <Navbar>RIMIX</Navbar>
      <div className="header fcol row-span-1">
        <Card className="panel fcol flex-auto">
          <CardHeader>
            <CardTitle className="header ">CUSTOMERS</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <SearchBar className="searchbar" />
          </CardContent>
        </Card>
      </div>
      <div className="page-content h-[500px] bg ">
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

      <div className="footer h-[10svh] bg-white  w-full fixed bottom-0  backdrop-filter backdrop-blur-sm">
        <div className="gradient-blur absolute bottom-[100%]"></div>
      </div>
    </div>
  );
}
