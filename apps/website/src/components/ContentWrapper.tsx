"use client"

import React, { useState } from 'react'
import { Box, Text, ActionMenu, ActionList, IconButton } from '@primer/react'
import { ListUnorderedIcon, TagIcon } from '@primer/octicons-react'

interface ContentWrapperProps {
  wordCount?: number
  tags?: string[]
  children: React.ReactNode
  headings: string[],
  fileName: string
}

export function ContentWrapper({ wordCount, tags = [], children, headings, fileName }: ContentWrapperProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box borderWidth="1px" borderStyle="solid" borderColor="border.default" borderRadius={2}>
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        p={2}
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="border.default"
        bg="canvas.subtle"
      >
        <Box display="flex" alignItems="center">
          <ActionMenu open={isOpen} onOpenChange={setIsOpen}>
            <ActionMenu.Anchor>
              <IconButton aria-label="Table of contents" icon={ListUnorderedIcon} onClick={() => setIsOpen(!isOpen)}/>
            </ActionMenu.Anchor>
            <ActionMenu.Overlay>
              <ActionList>
                {headings.map((heading, index) => (
                  <ActionList.Item key={index}>{heading}</ActionList.Item>
                ))}
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
          <Text ml={2} fontSize={"16px"}><code>{fileName || "Unknown"} - {wordCount || 0} Words</code></Text>
        </Box>
        <Box display="flex" alignItems="center">
          {tags.map((tag, index) => (
            <Box key={index} display="flex" alignItems="center" ml={2}>
              <TagIcon size={16} />
              <Text ml={1} fontSize={"16px"}><code>{tag}</code></Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box p={3}>
        {children}
      </Box>
    </Box>
  )
}