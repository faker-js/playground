import type { NextPage } from "next";

import { faker } from "@faker-js/faker";

export async function getServerSideProps() {
  return {
    props: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    },
  };
}

const Home: NextPage<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName,
}) => {
  return (
    <h1>
      Welcome {firstName} {lastName}!
    </h1>
  );
};

export default Home;
