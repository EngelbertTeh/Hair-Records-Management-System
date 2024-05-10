import Navbar from '@/components/component/Navbar';
import SearchBar from '@/components/component/SearchBar';
import { Card } from '@/components/ui/card';
export default function CustomerList() {
  return (
    <div className="page">
      <Navbar>RIMIX</Navbar>
      <div className="page-content h-full ">
        <div className="panel fcol flex-auto">
          <div>
            <h1 className="header ">CUSTOMERS</h1>
          </div>
          <div className="flex justify-center">
            <SearchBar className="searchbar" />
          </div>
        </div>
        <div
          className="scroll-container p-2
          h-full gap-2 flex flex-col items-center"
        >
          <Card className=" flex-col w-[200px]  flex  h-[200px]">
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
          </Card>
          <Card className="flex-col w-[200px]  flex  h-[200px]">
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
          </Card>
          <Card className="flex-col w-[200px]  flex  h-[200px]">
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
          </Card>
          <Card className="flex-col w-[200px]  flex  h-[200px]">
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
          </Card>
          <Card className="flex-col w-[200px]  flex  h-[200px]">
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
          </Card>
          <Card className="flex-col w-[200px]  flex  h-[200px]">
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
          </Card>
          <Card className="flex-col w-[200px]  flex  h-[200px]">
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
            <p>Somebody</p>
          </Card>
        </div>
      </div>

      <div className="footer h-[10svh] bg-white  w-full fixed bottom-0  backdrop-filter backdrop-blur-sm">
        <div className="gradient-blur absolute bottom-[100%]"></div>
      </div>
    </div>
  );
}
