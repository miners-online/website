import { ErrorLayout } from '@/components/ErrorLayout'

export const metadata = {
    title: '404 - Page not found.',
}

export default function E404Page() {
    return (
        <ErrorLayout
            title='Page not found'
            description="Sorry, but we couldn't find that page. Maybe you have tried to use an incorrect URL?"
        />
    )
}