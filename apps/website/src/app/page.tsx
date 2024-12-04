"use client"

import { PageLayout } from '@primer/react'

import { ContentWrapper } from '@/components/ContentWrapper'

export default function IndexPage() {
    return (
        <PageLayout>
            <PageLayout.Content>
                <ContentWrapper tags={["test"]} headings={["Test", "AAA"]} fileName='README.md'>
                    <div className="markdown-body">
                        <p>
                            Text can be <b>bold</b>, <i>italic</i>, or <s>strikethrough</s>. <a href="https://github.com">Links </a>{' '}
                            should be blue with no underlines (unless hovered over).
                        </p>
                    </div>
                </ContentWrapper>
            </PageLayout.Content>
        </PageLayout>
    )
}