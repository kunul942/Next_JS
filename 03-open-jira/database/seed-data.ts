//*INSERTAR DATA DE FORMA AUTOMATICA


interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {

    entries: [
        {
            description: 'Pendiente: Hola que tal como estas? Soy el pendiente por defecto',
            status:'pending',
            createdAt: Date.now(),
        },
        {
            description: 'In-Progress: Hola que tal como estas? Soy el progress por defecto',
            status:'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Finished: Hola que tal como estas? Soy el finished por defecto',
            status:'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}