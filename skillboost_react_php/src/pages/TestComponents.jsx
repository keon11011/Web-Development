import Button from '../components/ui/Button';
import SvgArrowCircleDown from '../components/icons/Arrow/ArrowCircleDown';

const TestComponents = () => (
    <main className="relative bg-background-primary">
      {/* Nav
      <SearchMagnifyingGlass color='#000'/> */}

      <div className='display-large'>
        Display Large
      </div>
      <div className='display-medium'>
        Display Medium
      </div>
      <div className='display-small'>
        Display Small
      </div>

      <div className='headline-large'>
        Headline Large
      </div>
      <div className='headline-medium'>
        Headline Medium
      </div>
      <div className='headline-small'>
        Headline Small
      </div>

      <div className='title-large'>
        Title Large
      </div>
      <div className='title-medium'>
        Title Medium
      </div>
      <div className='title-small'>
        Title Small
      </div>

      <div className='label-large'>
        Label Large
      </div>
      <div className='label-medium'>
        Label Medium
      </div>
      <div className='label-small'>
        Label Small
      </div>

      <div className='body-large'>
        Body Large
      </div>
      <div className='body-medium'>
        Body Medium
      </div>
      <div className='body-small'>
        Body Small
      </div>  

      <div className='flex'>
        <div className='bg-brand-default text-text-white p-4 m-4'>
          bg-primary-default
        </div>
        <div className='bg-brand-lightest text-text-primary p-4 m-4'>
          bg-primary-lightest
        </div>
        <div className='bg-brand-lighter text-text-white p-4 m-4'>
          bg-primary-lighter
        </div>
        <div className='bg-brand-default text-text-white p-4 m-4'>
          bg-primary-default
        </div>
        <div className='bg-brand-darker text-text-white p-4 m-4'>
          bg-primary-darker
        </div>
      </div>

      <div className='flex'>
        <div className='bg-background-primary border border-outline-button text-text-primary p-4 m-4'>
          bg-background-primary
        </div>
        <div className='bg-background-secondary text-text-primary p-4 m-4'>
          bg-primary-lightest
        </div>
        <div className='bg-background-third text-text-secondary p-4 m-4'>
          bg-primary-lighter
        </div>
      </div>

      <div className='flex'>
        <div className='bg-sematic-red text-text-white p-4 m-4'>
          sematic-background-red
        </div>
        <div className='bg-sematic-blue text-text-white p-4 m-4'>
          sematic-background-blue
        </div>
        <div className='bg-sematic-yellow text-text-white p-4 m-4'>
          sematic-background-yellow
        </div>
        <div className='bg-sematic-green text-text-white p-4 m-4'>
          sematic-background-green
        </div>
      </div>

      <div className='flex space-x-4 p-2'>
        <Button size="Big" variant="Primary">Primary</Button>
        <Button size="Big" variant="Secondary">Secondary</Button>
        <Button size="Big" variant="Outlined">Outlined</Button>
        <Button size="Big" variant="Plain">Plain</Button>
        <Button size="Big" variant="Neutral">Neutral</Button>
        <Button size="Big" variant="Destructive" onClick={() => alert('Đang xóa ư?')}>Destructive</Button>
        <Button size="Big " variant="Destructive-plain">Destructive P</Button>
        <Button size="Big" variant="Loading">Loading</Button>
      </div>
      <div className='flex space-x-4 p-2'>
        <Button size="Medium" variant="Primary">Primary</Button>
        <Button size="Medium" variant="Secondary">Secondary</Button>
        <Button size="Medium" variant="Outlined">Outlined</Button>
        <Button size="Medium" variant="Plain">Plain</Button>
        <Button size="Medium" variant="Neutral">Neutral</Button>
        <Button size="Medium" variant="Destructive" onClick={() => alert('Đang xóa ư?')}>Destructive</Button>
        <Button size="Medium" variant="Destructive-plain">Destructive P</Button>
        <Button size="Medium" variant="Loading">Loading</Button>
      </div>
      <div className='flex space-x-4 p-2'>
        <Button size="Small" variant="Primary" state="disabled">Primary</Button>
        <Button size="Small" variant="Secondary">Secondary</Button>
        <Button size="Small" variant="Outlined">Outlined</Button>
        <Button size="Small" variant="Plain">Plain</Button>
        <Button size="Small" variant="Neutral">Neutral</Button>
        <Button size="Small" variant="Destructive" onClick={() => alert('Đang xóa ư?')}>Destructive</Button>
        <Button size="Small" variant="Destructive-plain">Destructive P</Button>
        <Button size="Small" variant="Loading">Loading</Button>
      </div>

      <div>
        <SvgArrowCircleDown width="2rem" height="2rem" stroke="red" strokeWidth={1}/>
      </div>

      
    </main>
  );
  
  export default TestComponents;