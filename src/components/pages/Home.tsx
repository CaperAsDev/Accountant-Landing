import {
  Hero,
  HomeServiceA,
  HomeChooseUs,
  HomeServiceB,
  HomeReasons,
  HomeWhyUs,
  HomeServiceC,
} from '../molecules';
import { HomeSection } from '../organisms';

function Home() {
  return (
    <main className='bg-ligth-0 grid gap-y-5 sm:gap-y-7 md:gap-y-10 lg:gap-y-14'>
      <Hero />
      <HomeSection>
        <HomeServiceA />
      </HomeSection>
      <HomeSection>
        <HomeChooseUs />
      </HomeSection>
      <HomeSection className='bg-dark-1'>
        <HomeServiceB />
      </HomeSection>
      <HomeSection >
        <HomeReasons />
      </HomeSection>
      <HomeSection >
        <HomeWhyUs />
      </HomeSection>
      <HomeSection >
        <HomeServiceC />
      </HomeSection>
    </main>
  );
}

export default Home;
