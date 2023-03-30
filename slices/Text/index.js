import React from 'react'
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from '@prismicio/react'
import { Bounded } from "../../components/Bounded";

/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param { TextProps }
 */
const Text = ({ slice }) => (
  <Bounded as="section" className="bg-white text-slate-500">
    <div className="title max-w-prose">
      {
        slice.primary.title ?
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h2 className="text-4xl mb-8 font-semibold text-slate-800">
                  {children}
                </h2>
              ),
            }}
          />
          : <h2>Template slice, update me!</h2>
      }
    </div>
    {prismicH.isFilled.richText(slice.primary.text) && (
      <div className="max-w-prose prose">
        <PrismicRichText
          field={slice.primary.text}
          components={{
            heading1: ({ children }) => (
              <h2 className="text-4xl font-semibold text-slate-800">
                {children}
              </h2>
            ),
          }}
        />
      </div>
    )}
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </Bounded>
)

export default Text