import { useRef, useState } from "react";
import { Prism } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export const CommonPrism = ({ children, limit_height }: { children: string, limit_height?: string }) => {

    const textInput = useRef<HTMLDivElement>(null)
    const [hovered, setHovered] = useState(false)
    const [copied, setCopied] = useState(false)

    const onEnter = () => {
        setHovered(true)
    }

    const onExit = () => {
        setHovered(false)
        setCopied(false)
    }

    const onCopy = () => {
        setCopied(true)
        if (textInput.current !== null && textInput.current.textContent !== null)
            navigator.clipboard.writeText(textInput.current.textContent)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    if (!limit_height) limit_height = ""
    return (
        <div className={`code-block-container ${limit_height}`}>
            {/* <Prism className="code-block" language="typescript" style={vscDarkPlus}>
                {children}
            </Prism> */}

            <div
                ref={textInput}
                onMouseEnter={onEnter}
                onMouseLeave={onExit}
                className="relative code-block"
            >
                {hovered && (
                    <button
                        aria-label="Copy code"
                        type="button"
                        className={`btn ${copied ? 'copied' : ''}`}
                        onClick={onCopy}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            className={copied ? 'text-green-400' : 'text-gray-300'}
                        >
                            {copied ? (
                                <>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                    />
                                </>
                            ) : (
                                <>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                </>
                            )}
                        </svg>
                    </button>
                )}
                <Prism language="jsx" style={vscDarkPlus}>
                    {children}
                </Prism>
            </div>
        </div>

    )
}