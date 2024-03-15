const cardContainer =  `
    flex
    justify-center
    w-[500px]
    h-40
    transition-all
    delay-100
    ease-linear
    cursor-pointer
    text-gray-900
    hover:bg-gradient-to-r
    hover:scale-90
    relative
`;


const cardImageContainer = `
    border-8
    border-solid
    h-full
    justify-center
    items-center
    flex
    [clip-path: polygon(0 0, 96% 0, 55% 100%, 0 100%)]
    delay-100
    opacity-90
    bg-gray-300
`;


const cardContent = `
    flex
    flex-col
    justify-center
    items-center
    w-4/5
    h-full
    p-4 
    duration-200
    absolute
`;


const cardTitle = `
    font-medium
    text-3xl
`;


const cardImg = `
    w-[150px]
    aspect-square
    object-cover
    rounded-2xl
    p-4
`;

export {
    cardContainer,
    cardImageContainer,
    cardContent,
    cardTitle,
    cardImg
};