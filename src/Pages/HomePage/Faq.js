import React from 'react';
import './faq.css';
import { useState } from 'react';

function Faq() {
  const [selected, setSelected] = useState(null);

  
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqOpen = '+'
  const faqClose = '-'

  const faqData = [
    {
      question: 'What is Hiyalo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is Hiyalo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is Hiyalo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
    {
      question: 'What is Hiyalo about?',
      answer:
        ' Cumque sequi molestias harum cupiditate laboriosam est alias soluta ratione, maiores.',
    },
  ];
  return (
    <div className="faq-container">
      <header className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </header>

      <main className="faqs">
        {faqData.map((faq, i) => {
          return (
            <div className="faq">
              <header className="title" onClick={() => toggle(i)}>
                <h6>{faq.question}</h6>
                <span>
            
                  {selected === i
                    ? `${faqClose}`
                    : `${faqOpen}`}
                </span>
              </header>
              <article
                className={selected === i ? 'faq-content shows' : 'faq-content'}
              >
                <p>{faq.answer}</p>
              </article>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Faq;