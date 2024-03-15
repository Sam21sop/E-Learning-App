import { heroContent, heroH1Heading, heroH4Heading, heroHeader, heroLogo, heroLogoWrapper, heroParagraph } from "./heroStyle";

function Hero() {
  return (
    <>
        <header className={heroHeader}>
            <section className={heroLogoWrapper}>
                <img 
                    className={heroLogo}
                    src="https://files.codingninjas.in/pl-ninja-16706.svg" 
                    alt="Logo" 
                />
            </section>

            <section className={heroContent}>
                <h4 className={heroH1Heading}>
                    Are You Ready To ?
                </h4>
                <h1 className={heroH4Heading}>
                    Make Future Bright
                </h1>
                <p className={heroParagraph}>
                    Your decision is
                    valueable for making your future Bright.
                </p>
            </section>
        </header>
    </>
  )
}

export default Hero;