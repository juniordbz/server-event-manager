import  { prisma }  from "../src/lib/prisma";

async function seed(){
  await prisma.event.create({
    data:{
      id: 'b11e106b-4ef7-43f9-a7fc-002ce48f7ca3',
      title: 'Unit Summit',
      slug: 'unit-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() =>{
  console.log("Database seeded!")
  prisma.$disconnect()
})