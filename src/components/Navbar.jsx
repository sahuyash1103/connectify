import Image from "next/image";

const typography = {
  color: "#373B5C",
  fontFamily: "Poppins",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
};

export default function Navbar() {
  return (
    <header
      className="inline-flex justify-end items-center p-2 w-full"
      style={{
        background: "#FFF",
        borderBottom: "0.889px solid var(--dividers-and-borders-grey-light, #CECECE)",
      }}>
      <div className="flex h-14 gap-2 m-2">
        <Image
          className="m-1.5"
          priority
          width={25}
          height={25}
          src="/assets/svgs/notification.svg"
          alt="bell"
          style={{
            fill: "rgba(0, 0, 0, 0.00)",
          }}
        />
        <div
          className="flex justify-center items-center h-14 gap-2 py-1 px-3 mx-2 my-1"
          style={{
            border: "1px solid #E8EFF7",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.50)",
          }}
        >
          <div
            className="flex items-center justify-center w-8 h-8"
            style={{
              borderRadius: "7px",
              background: "#FFA78D",
            }}
          >
            {/* <div className="flex-shrink-0 w-9 h-9" style={{
              background: "url(/assets/imgs/image-11.png), lightgray 50% / cover no-repeat",
            }} /> */}
            <Image
              className="flex-shrink-0"
              priority
              width={34}
              height={34}
              alt="user"
              src="/assets/imgs/image-11.png"
            />
          </div>
          <div className="flex flex-col items-center justify-center mx-1 px-1" style={{
            flex: "1 0 0",
          }}>
            <span
              className="flex justify-center flex-col self-stretch"
              style={{ ...typography }}
            >
              Welcome back,
            </span>
            <span
              className="flex h-6 justify-center flex-col self-stretch"
              style={{
                ...typography,
                fontSize: "18px",
              }}
            >
              Vishnu Swaroop
            </span>
          </div>
          <Image
            priority
            width={25}
            height={25}
            alt="arrow down"
            src="/assets/svgs/arrow-down.svg"
            style={{
              fill: "rgba(0, 0, 0, 0.00)"
            }}
          />
        </div>
      </div>
    </header>
  );
}
