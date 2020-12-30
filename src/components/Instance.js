import React from 'react'

export default function Instance(props) {
  const {
    linkUrl, 
    imageUrl, 
    imageDescription, 
    title,
    metadata
  } = props.data;

  return (
    <section className="mzp-c-card mzp-c-card-extra-small has-aspect-3-2">
      <a
        className="mzp-c-card-block-link"
        href={linkUrl}
      >
        <div className="mzp-c-card-media-wrapper">
          <img
            className="mzp-c-card-image"
            src={imageUrl}
            alt={imageDescription}
          />
        </div>
        <div className="mzp-c-card-content">
          <h2 className="mzp-c-card-title">
            {title}
          </h2>
          <p className="mzp-c-card-meta">
            {metadata}
          </p>
        </div>
      </a>
    </section>
  )
}
