interface Person {
    name: string;
    age: number;
}
function ParentComponent() {
    const person: Person = { name: 'Tom', age: 20 };
    return <ChildComponent {...person} />;
}

function ChildComponent(props: Person) {
    const { name, age } = props

    return (
        <div>
            <p>姓名：{name}</p>
            <p>年齡：{age}</p>
        </div>
    );
}
interface Person2 {
    name: string;
    age: number;
    functionTest: () => void;
}

function ParentComponent2() {
    // const person: Person2 = { name: 'Tom', age: 20, functionTest: () => { } };
    const person: Person2 = {
        name: 'Tom',
        age: 20,
        functionTest: () => {
            console.log("test"); // 在此呼叫 console.log() 函式
        }
    };
    return <ChildComponent2 {...person} />;
}

function ChildComponent2(props: Person2) {
    const { name, age, functionTest } = props

    functionTest();
    return (
        <div>
            <p>姓名：{name}</p>
            <p>年齡：{age}</p>
            <button onClick={functionTest}>執行 functionTest</button>
        </div>
    );
}

