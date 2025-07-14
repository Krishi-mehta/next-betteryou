import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './/styles/quickSearch.css'

const QuickSearch = () => {
    const router = useRouter()
return(
    <section className="container">
        <div className="quicksearch">
            <h1 className="heading-title">How Are You Feeling Today?</h1>
            <ul className='quick_list'>
            <li className="anxiety"><Link href="/anxiety">Anxiety</Link></li>
            <li className="stress"><Link href="/stress">Stress</Link></li>
            <li className="activities"><Link href="/activities">Activities</Link></li>
            <li className="depression"><Link href="/depression">Depression</Link></li>
            <li className="moddswing"><Link href="/moodswing">Mood Swings</Link></li>
            </ul>
        </div>
    </section>
)
}

export default QuickSearch;