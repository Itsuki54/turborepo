import { faker } from '@faker-js/faker';
import { db } from './client';

async function main() {
  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.log('Seeding database...');
  for (let i = 0; i < 10; i++) {
    await db.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),
      },
    });
  }
  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.log('Database seeded!');
}

main()
  .catch((e) => {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
