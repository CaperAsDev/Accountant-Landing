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
    <main>
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
