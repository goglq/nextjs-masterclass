import { Suspense } from 'react'

import Link from 'next/link'

import TicketsList from './TicketsList'
import Loading from './loading'

export default function Tickets() {
    return (
        <main>
            <nav className="flex justify-between">
                <div>
                    <h2>Tickets</h2>
                    <p>
                        <small>Currently open tickets.</small>
                    </p>
                </div>
                <Link
                    className="bg-primary text-white px-2 py-1"
                    href="/tickets/create"
                >
                    Create Ticket
                </Link>
            </nav>
            <Suspense fallback={<Loading />}>
                <TicketsList />
            </Suspense>
        </main>
    )
}
