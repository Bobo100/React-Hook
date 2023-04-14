import useToggleHook from "./useToggleHook";

export function UseToggleFC() {
    const [value, toggleValue] = useToggleHook(false);

    return (
        <div className="border">
            <p>{value.toString()}</p>
            <button onClick={toggleValue}>
                Toggle
            </button>
            <button onClick={() => toggleValue(true)}>
                True
            </button>
            <button onClick={() => toggleValue(false)}>
                False
            </button>
        </div>
    )
}