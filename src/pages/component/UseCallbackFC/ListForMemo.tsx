import { useEffect, useState } from "react"
type ListProps = {
    getItems: number[];
}
// 在 List.js 中
// ListForMemo宣告為React.FC，所以要傳入參數
// React.FC意思是React Function Component
// 這邊的參數是type ListProps = { getItems: number[]; }
// 所以參數是getItems: number[]
export const ListForMemo: React.FC<ListProps> = ({ getItems }) => {
    // 呼叫 getItems 函數來取得 items 陣列
    const [items, setItems] = useState<number[]>([])

    useEffect(() => {
        setItems(getItems)
        // console.log('Updating Items')
    }, [getItems])

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export const ListForMemo4: React.FC<{ getItems: number[] }> = ({ getItems }) => {
    // 呼叫 getItems 函數來取得 items 陣列
    const [items, setItems] = useState<number[]>([])

    useEffect(() => {
        setItems(getItems)
        // console.log('Updating Items')
    }, [getItems])

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};


//ListForMemo 改用 function來寫
// 上面的和下面的效果是一樣的
// 要這樣寫是因為我們是把參數當作props來傳入
export function ListForMemo2({ getItems }: ListProps) {
    // 呼叫 getItems 函數來取得 items 陣列
    const [items, setItems] = useState<number[]>([])

    useEffect(() => {
        setItems(getItems)
        // console.log('Updating Items')
    }, [getItems])

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

// 一般的function寫法 這就不是function component了
export function add(a: number, b: number) {
    console.log('add')
    return a + b;
}


export function ListForMemo3({ getItems }: { getItems: number[] }) {
    // 呼叫 getItems 函數來取得 items 陣列
    const [items, setItems] = useState<number[]>([])

    useEffect(() => {
        setItems(getItems)
        // console.log('Updating Items')
    }, [getItems])

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

