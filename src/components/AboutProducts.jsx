import Image from "next/image";
import Container from "./Container";
import "/src/app/globals.css";
import clsx from "clsx";

const AboutProducts = () => {
  return (
    <section
      id="expertise"
      className="overflow-hidden py-8 sm:py-2 lg:pb-8 xl:pb-3"
    >
      <Container className="overflow-hidden py-2">
        <h1 className={clsx("text-3xl font-bold text-orange-600")}>
          Nossos Produtos
        </h1>
      </Container>
      <Container>
        -
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {/* Left Side */}
          <div className="relative flex justify-center items-center">
            <p>
              Creators Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores beatae mollitia.
            </p>
          </div>
          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/Moonfire-Creators-2-1.png"
              width={350}
              height={350}
              alt=""
            ></Image>
          </div>
        </div>
      </Container>
      <Container>
        -
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-28">
          {/* Left Side */}
          <div className="relative flex justify-center items-center">
            <p>
              Games Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores beatae mollitia.
            </p>
          </div>
          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/Moonfire-Games-2.png"
              width={350}
              height={350}
              alt=""
            ></Image>
          </div>
        </div>
      </Container>
      <Container>
        -
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-28">
          {/* Left Side */}
          <div className="relative flex justify-center items-center">
            <p>
              Adds Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores beatae mollitia.
            </p>
          </div>
          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/Moonfire-Ads.png"
              width={280}
              height={280}
              alt=""
            ></Image>
          </div>
        </div>
      </Container>
      <Container>
        -
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-28">
          {/* Left Side */}
          <div className="relative flex justify-center items-center">
            <p>
              Sounds Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores beatae mollitia.
            </p>
          </div>
          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/Moonfire-Sound-2-1.png"
              width={350}
              height={350}
              alt=""
            ></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutProducts;
