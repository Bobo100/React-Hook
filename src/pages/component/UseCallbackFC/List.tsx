import { useEffect, useState } from "react"
type ListProps = {
    getItems: () => number[];
}
// 在 List.js 中
export const List: React.FC<ListProps> = ({ getItems }) => {
    // 呼叫 getItems 函數來取得 items 陣列
    const [items, setItems] = useState<number[]>([])

    useEffect(() => {
        setItems(getItems())
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
