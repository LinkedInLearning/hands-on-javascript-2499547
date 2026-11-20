import config from './config.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Eyebrow from './components/Eyebrow.jsx';
import useReveal from './useReveal.js';
import url from './url.js';

export default function Privacy() {
  useReveal();
  return (
    <>
      <Header base={url('/')} />
      <main id="main" tabIndex={-1} className="glow-left outline-none">
        <article className="container-site max-w-3xl pb-24" style={{ paddingTop: 'calc(env(safe-area-inset-top) + 8rem)' }}>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="display mt-5 text-[clamp(2.5rem,7vw,4.5rem)]">
            Privacy <span className="emph">policy</span>
          </h1>
          <div className="rule my-10" />
          <div className="space-y-8 text-lg text-fg/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-light [&_h2]:text-fg">
            <section>
              <h2>What we collect</h2>
              <p className="mt-3">
                When you send an inquiry, we collect the details you enter: your name, company or venue, email address,
                phone number, location, the type of inquiry and your message.
              </p>
            </section>
            <section>
              <h2>How we use it</h2>
              <p className="mt-3">
                We use these details only to reply to your inquiry and to discuss bringing The Bean Box to your space.
                We do not sell your information.
              </p>
            </section>
            <section>
              <h2>Your browser</h2>
              <p className="mt-3">
                While you fill in the inquiry form, an unsent draft is kept in your browser's session storage so you
                don't lose it if you reload the page. It is removed when you close the tab or send the form.
              </p>
            </section>
            <section>
              <h2>Your choices</h2>
              <p className="mt-3">
                You can ask us to see, correct or delete the information you sent us
                {config.email ? (
                  <>
                    {' '}by emailing{' '}
                    <a className="text-hi underline underline-offset-4" href={`mailto:${config.email}`}>
                      {config.email}
                    </a>
                  </>
                ) : null}
                .
              </p>
            </section>
          </div>
          <p className="mt-14">
            <a href={url('/')} className="inline-flex min-h-11 items-center text-hi underline underline-offset-4 hover:text-accent">
              ← Back to The Bean Box
            </a>
          </p>
        </article>
      </main>
      <Footer base={url('/')} />
    </>
  );
}
