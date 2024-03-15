const navStyle = `
    h-20
    w-screen
    bg-gray-500  
    text-white
    flex
    items-center
    justify-center
    relative
    top-0
    left-0
    z-3
    shadow-sm
`;


const containerStyle = `
    h-16
    w-11/12
    my-0
    bg-gray-400
    flex
    items-center
    justify-between
    rounded
`;


const titleWrapper = `
    flex
    items-center
`;


const navLogo = `
    w-12
    m-4
    aspect-square
    bg-white
    rounded
`;


const navButtonContainer = `
    flex
    items-center
    gap-5
    h-full
`;


const navButtons = `
    cursor-pointer
    m-4
    px-2
    py-1.5
    text-base
    font-black
    border
    border-solid
    border-black
    rounded
    bg-red-50
    text-black
    shadow-outline
    transition-all
    delay-200
    ease-in-out
    hover:scale-90
    hover:bg-green-300
    hover:shadow-sm
    hover:text-black
`;

const navHeading = `
    text-base
    font-bold
    antialiased
    font-sans
    text-black
    rounded
    bg-gray-200
    m-1
    p-2
`;


// export all style of navbar
export {
    navStyle,
    containerStyle,
    titleWrapper,
    navLogo,
    navButtonContainer,
    navButtons,
    navHeading
};