import { Prism } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export const CommonPrism = ({ children, limit_height }: { children: string, limit_height?: string }) => {
    if (!limit_height) limit_height = ""
    return (
        <div className={`code-block-container ${limit_height}`}>
            <Prism className="code-block" language="typescript" style={vscDarkPlus}>
                {children}
            </Prism>
        </div>

    )
}