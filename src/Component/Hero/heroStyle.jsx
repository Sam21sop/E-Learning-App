const heroHeader = `
    flex
    justify-centre
    h-screen
    w-full
    bg-gray-500
    text-center
    bg-cover
`;


const heroLogoWrapper = `
    flex
    items-center
    justify-center
    flex-1
    bg-red-100
    m-0
    [clip-path:polygon(0%_0%,100%_0%,71%_100%,0%_100%)]
`;


const heroLogo = `
    w-96
    aspect-square
    mr-10
`;


const heroContent = `
    flex
    justify-center
    flex-col
    text-right
    flex-1
    p-12
    text-white
`;


const heroH1Heading = `
    text-7xl
    font-bold
    mb-4
    self-center
`;


const heroH4Heading = `
    text-3xl
    font-bold
    mb-4
    self-center
`;


const heroParagraph = `
    text-lg
    font-light
    mb-4
    font-serif
    place-self-center
`;

// export hero style classes
export {
    heroHeader,
    heroLogoWrapper,
    heroLogo,
    heroContent,
    heroH1Heading,
    heroH4Heading,
    heroParagraph
};