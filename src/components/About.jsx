export function About() {
  return (
    <section
      id="about"
      className="mzp-l-content mzp-t-content-xl"
      style={{
        marginTop: '4rem',
        marginBottom: '4rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <article className="mzp-c-article">
        <h2 className="mzp-c-article-title">
          Tools for a more accessible democracy
        </h2>
        <p>
          We wondered why it was so hard to find out what was happening in our
          local city council and why we couldn't just search for council
          meetings and legislation based on a topic. So, we set out to solve
          that.
        </p>
        <p>
          Council Data Project (CDP) is an open-source project dedicated to
          providing journalists, activists, researchers, and all members of each
          community we serve with the tools they need to stay informed and hold
          their council members accountable. By combining and simplifying
          sources of information on council meetings and actions, CDP ensures
          that everyone is empowered to participate in local government.
        </p>
        <p>
          For members of the community looking to stay up-to-date, we aim to
          make finding relevant meetings as easy as possible. For journalists
          and activists, our tools let you track legislation through the council
          process, search timestamped transcripts, query full voting records,
          and more. And, for civic technology organizations and municipal
          government offices, we make all of our tools easy to deploy for your
          own council.
        </p>
      </article>
    </section>
  );
}
