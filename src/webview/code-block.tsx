import { ReactNode } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  className?: string
  children?: ReactNode
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { className, children } = props
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <SyntaxHighlighter
      children={String(children).trimStart().replace(/\n$/, '')}
      style={vscDarkPlus}
      language={match[1] || 'typescript'}
    />
  ) : (
    <code>
      {String(children)}
    </code>
  )
}

export default CodeBlock