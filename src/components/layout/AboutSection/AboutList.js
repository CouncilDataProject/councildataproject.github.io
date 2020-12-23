import React from 'react'

export default function AboutList() {
    return (
      <>
        <ul className="steps">
          <li>
            <span className="step-index">1</span>
            <span className="step-description">
              <strong>Gather Events</strong> The only requirement for new CDP
              instance maintainers is to provide a method to gather some basic
              event information. Event information can be as simple as{" "}
              <a href="https://councildataproject.github.io/cdp-backend/event_data_ingestion_model.html#minimal-event-data">
                a URL to a meeting recording
              </a>{" "}
              or as expansive as{" "}
              <a href="https://councildataproject.github.io/cdp-backend/event_data_ingestion_model.html#expanded-event-data-with-event-minutes-items">
                having all minutes items and vote information attached
              </a>
              .
            </span>
          </li>

          <li>
            <span className="step-index">2</span>
            <span className="step-description">
              <strong>Transcribe</strong> Our tools will take over the rest of
              the job and either clean up and use provided closed caption files,
              or create transcripts using the event recording.
            </span>
          </li>

          <li>
            <span className="step-index">3</span>
            <span className="step-description">
              <strong>Create Searchable Index</strong> Every two days our system
              will reindex all the events, legislation, and minutes items for
              you.
            </span>
          </li>
        </ul>
      </>
    );
}
