"use client"

import { PageLayout } from '@primer/react'
import { Blankslate } from '@primer/react/experimental'


export function ErrorLayout({title, description}: {title: string, description: string}) {
    return (
        <PageLayout>
            <PageLayout.Content>
                <Blankslate>
                    <Blankslate.Heading>{title}</Blankslate.Heading>
                    <Blankslate.Description>
                        {description}
                    </Blankslate.Description>
                    <Blankslate.PrimaryAction href="/">
                        Go back home
                    </Blankslate.PrimaryAction>
                </Blankslate>
            </PageLayout.Content>
        </PageLayout>
    )
}