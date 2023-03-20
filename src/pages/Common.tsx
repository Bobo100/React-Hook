import { Prism } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export const CommonPrism = ({ children }: { children: string }) => {
    return (
        <div className="code-block-container">
            <Prism className="code-block" language="typescript" style={vscDarkPlus}>
                {children}
            </Prism>
        </div>
    )
}