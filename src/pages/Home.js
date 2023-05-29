import {
  First,
  Second,
  Section,
  Container,
} from '../components/Phonebook.styled';

export default function Home() {
  return (
    <Container>
      <Section>
        <First>phone</First>
        <Second>book</Second>
      </Section>
    </Container>
  );
}
