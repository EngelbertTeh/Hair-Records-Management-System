import Footer from '@/components/component/Footer';
import Navbar from '@/components/component/Navbar';
import Page from '@/components/component/Page';
import PageContent from '@/components/component/PageContent';
import Panel from '@/components/component/Panel';
import SearchBar from '@/components/component/SearchBar';
import { Card } from '@/components/ui/card';
export default function CustomerList() {
  return (
    <Page>
      <Navbar>RIMIX</Navbar>
      <PageContent>
        <Panel props={{ title: 'CUSTOMERS' }} shadow={true}>
          <SearchBar />
        </Panel>
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
      </PageContent>
      <Footer />
    </Page>
  );
}
//test