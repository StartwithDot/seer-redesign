import { useState } from 'react';
import type { Market } from '../data/types';
import { reality } from '../data/links';
export function MultiScalarQuestions({ market: m }: { market: Market }) {
 const [shown, setShown] = useState(true);
 return <div className="scalar-questions"><button className="button" onClick={() => setShown(!shown)}>{shown ? 'Hide questions' : 'Show questions'}</button>{shown && m.questions.map((q,i) => <div className="question-row" key={q.id}><span>{q.base_question.split("␟")[0]}</span><span>Answer: {m.answeredTooSoon[i] ? 'Answered too soon' : 'Not answered yet'}</span><span>Deadline: {new Date(Number(q.opening_ts)*1000).toUTCString()}</span>{reality(m) && <a href={reality(m)!} target="_blank" rel="noreferrer">Reopen question ↗</a>}</div>)}</div>;
}
