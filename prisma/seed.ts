import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const addDays = (numOfDays: number, date = new Date()) => {
  date.setDate(date.getDate() + numOfDays)

  return date
}

async function main() {
  await prisma.habits.create({
    data: {
      title: 'Correr 1KM',
      description: 'Objetivo de correr uma maratona no fim do ano',
      days: {
        create: [
          {
            dayNumber: 1,
            dayName: 'Monday',
          },
          {
            dayNumber: 3,
            dayName: 'Wednesday',
          },
          {
            dayNumber: 5,
            dayName: 'Friday',
          },
        ],
      },
      data: {
        create: [
          {
            date: addDays(1, new Date('2022-09-23')),
          },
          {
            date: addDays(2, new Date('2022-09-23')),
          },
          {
            date: addDays(3, new Date('2022-09-23')),
          },
        ],
      },
      userEmail: 'gtmelati@gmail.com',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
