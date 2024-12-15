import Section from "./Section";
import Title from "./Title";
import Button from "./Button";

const Contact = () => {
  return (
    <Section id="contact" className="xs:translate-y-[2.5rem]">
      <div className="container">
        <Title
          title="Contact Me"
          includeBanner
        />
        <form
          className="flex flex-wrap flex-col xl:-translate-y-[4.5rem]"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="92abe4e2-5c56-4608-a6da-f100f6453989"
          />

          <div className="flex flex-wrap m-8 gap-8">
            <div className="flex flex-wrap md:flex-nowrap w-full md:gap-4 gap-8">
              <div className="flex flex-col w-full md:w-1/2">
                <label className="body-2 mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="p-4 bg-n-6 rounded-xl w-full"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div className="flex flex-col w-full md:w-1/2">
                <label className="body-2 mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className="p-4 bg-n-6 rounded-xl w-full"
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col basis-full">
              <label className="body-2 mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                className="p-4 bg-n-6 rounded-xl w-full"
                name="message"
                required
              ></textarea>
            </div>
          </div>

          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <input
            type="hidden"
            name="redirect"
            value="https://tannerr23.github.io/tanners-website/receivedEmail.html"
          />

          <Button
            className="rounded-2xl bg-n-7 border border-n-5 p-2 w-[10rem] mx-auto"
            type="submit"
          >
            Send
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
