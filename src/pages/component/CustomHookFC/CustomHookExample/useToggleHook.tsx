import { useState } from "react";
export default function useToggleHook(defaultValue: boolean): [boolean, (value: any) => void] {

    const [value, setValue] = useState(defaultValue);

    function toggleValue(value?: boolean) {
        setValue(currentValue =>
            typeof value === 'boolean' ? value : !currentValue)
    }

    return [value, toggleValue]
}
