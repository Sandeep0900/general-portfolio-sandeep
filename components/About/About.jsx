import { CARD_NAMES } from "@/constants/footerData";

const About = () => {
  return (
    <div className="h-[90vh] w-screen relative flex flex-col justify-center items-center text-white">
      <div>
        <h2
          className="text-4xl font-montserrat uppercase text-center font-bold tracking-[.75rem] text-[#F7F0F5] opacity-0"
          style={{
            animation: "slideUp 1s ease-out forwards",
            animationDelay: "0.2s",
          }}
        >
          <i>Hello there, my name is</i>
        </h2>
        <h1
          className="font-hiatus text-[11.5rem] tracking-wider h-fit -mt-5 relative overflow-hidden gradient-text opacity-0"
          style={{
            animation: "slideUp 1s ease-out forwards",
            animationDelay: "0.6s",
          }}
        >
          Sandeep Sharma
        </h1>
        <div
          className="flex flex-col justify-center items-center text-xl -mt-5 font-montserrat tracking-[.7rem] opacity-0"
          style={{
            animation: "slideUp 1s ease-out forwards",
            animationDelay: "1s",
          }}
        >
          <h3>- Computer Engineering @ GHRCEM Pune -</h3>
        </div>
      </div>

      <div
        className="flex gap-x-12 items-center justify-center mt-10 animate-[slideUp_1s_ease-out_forwards] opacity-0"
        style={{ animationDelay: "1.4s" }}
      >
        {CARD_NAMES.map((card, index) => (
          <div
            key={index}
            className="group relative w-16 h-16 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl backdrop-blur-sm border border-purple-300/30 shadow-lg transition-all duration-300 group-hover:shadow-purple-500/20 group-hover:shadow-lg" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-purple-800/80 backdrop-blur-md transform rotate-45 rounded-xl border border-purple-300/20 transition-all duration-300 group-hover:shadow-lg group-hover:animate-[shake_0.2s_ease-in-out]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute transition-transform duration-300 text-4xl text-white opacity-100 group-hover:opacity-0 group-hover:scale-75">
                    {card.icon}
                  </div>

                  <div className="absolute transition-all duration-300 text-sm font-medium text-white text-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:delay-200">
                    {card.name}
                  </div>
                </div>

                <div className="absolute inset-0 -z-10 bg-purple-500/10 blur-3xl rounded-full transform scale-75 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
